const API_KEY = "AIzaSyCsLO3m4MFIbkGLYPpNFmhw4OpwukUDIy4";
const API_TIMEOUT = 30000; // 30 seconds
let currentController = null;

async function handleSearch() {
    const searchInput = document.getElementById('searchInput').value;
    const errorDiv = document.getElementById('error');
    const searchResults = document.getElementById('searchResults');
    const formatList = document.getElementById('formatList');
    
    errorDiv.textContent = '';
    searchResults.innerHTML = '';
    formatList.innerHTML = '';

    if (!searchInput) {
        errorDiv.textContent = 'Please enter a search term or YouTube URL';
        return;
    }

    // Check if input is a YouTube URL
    if (isYoutubeUrl(searchInput)) {
        searchVideos(searchInput);
        return;
    }

    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(searchInput)}&type=video&key=${API_KEY}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || 'Search failed');
        }

        // Video sonuçları için HTML şablonunu güncelle
        const results = data.items.map(item => `
            <div class="video-result" onclick="searchVideos('https://www.youtube.com/watch?v=${item.id.videoId}')">
                <img class="video-thumbnail" 
                     src="${item.snippet.thumbnails.medium.url}" 
                     alt="${item.snippet.title}"
                     loading="lazy">
                <div class="video-info">
                    <h3 class="video-title">${item.snippet.title}</h3>
                    <p class="video-channel">${item.snippet.channelTitle}</p>
                    <p class="video-description">${item.snippet.description.slice(0, 100)}...</p>
                </div>
            </div>
        `).join('');

        searchResults.innerHTML = results;
    } catch (error) {
        errorDiv.textContent = error.message || 'Search failed';
    }
}

function isYoutubeUrl(url) {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return youtubeRegex.test(url);
}

async function searchVideos(url) {
    const errorDiv = document.getElementById('error');
    const formatList = document.getElementById('formatList');
    const searchResults = document.getElementById('searchResults');
    
    searchResults.innerHTML = '';
    
    try {
        const response = await fetch('/api/v1/formats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch video formats');
        }
        
        if (data.status === 'error') {
            throw new Error(data.message);
        }

        if (!data.mp4_formats.length && !data.mp3_formats.length) {
            throw new Error('No download formats available');
        }

        // Format listesi için HTML şablonunu güncelle
        let html = '<h3>Available Formats:</h3>';
        if (data.mp4_formats.length > 0) {
            html += `
                <div class="format-section">
                    <h4>Video Formats (MP4)</h4>
                    ${data.mp4_formats.map(format => `
                        <div class="format-item">
                            <button onclick="downloadVideo('${url}', '${format.format_id}', 'mp4')">
                                Download MP4 - Quality ${format.format_id}
                            </button>
                            <div class="format-details">${format.details}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        if (data.mp3_formats.length > 0) {
            html += '<h4>Audio Formats:</h4>';
            data.mp3_formats.forEach(format => {
                html += `<div class="format-item">
                    <button onclick="downloadVideo('${url}', '${format.format_id}', 'mp3')">
                        Download MP3 - Format ${format.format_id}
                    </button>
                    <span>${format.details}</span>
                </div>`;
            });
        }

        formatList.innerHTML = html;
    } catch (error) {
        errorDiv.textContent = error.message || 'Error fetching video information';
        formatList.innerHTML = '';
    }
}

async function downloadVideo(url, formatId, type) {
    const errorDiv = document.getElementById('error');
    
    try {
        const response = await fetch('/api/v1/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: url,
                format_id: formatId,
                type: type,
                title: 'video' // You might want to get the actual title from the video metadata
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Download failed');
        }

        // Create a blob from the response and trigger download
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = `video.${type}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(downloadUrl);
        a.remove();
    } catch (error) {
        errorDiv.textContent = error.message;
    }
}
