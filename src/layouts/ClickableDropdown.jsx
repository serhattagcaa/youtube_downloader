import { h } from 'preact';
import { TiArrowSortedDown } from 'react-icons/ti';
import { useState } from 'preact/hooks';

// Define the list of languages  
const languages = ["English", "العربية", "বাঙালি", "Deutsch", "Español", "Filipino", "Français", "हिन्दी / Hindi", "Italiano",
 "日本語", "한국어", "Malay", "Myanmar မြန်မာ", "Português", "Русский", "ไทย", "Türkçe", "Tiếng Việt", "简体中文", "繁體中文"];

const ClickableDropdown = () => {

  // Define state variables for selected language and arrow color
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [arrowColor, setArrowColor] = useState('');

  // Define event handlers for mouse over and out events
  const handleMouseOver = () => setArrowColor('rgb(190, 18, 60)');
  const handleMouseOut = () => setArrowColor('');

  return (
    <div className="flex flex-row overflow-hidden relative">
        
        {/* Dropdown select element */}
        <select
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}
         onChange={(e) => setSelectedLanguage(e.target.value)}
         className="bg-[#f9f9f9] appearance-none lg:w-[70px] lg:h-[70px] text-sm focus:outline-none border-none hover:bg-gray-200 hover:text-rose-700">
          
         {/* Generate option elements for each language */}
         {languages.map((language) => (
           <option className='text-gray-800 bg-white'
            value={language}>{language}</option>
        ))}
        </select>
      
      {/* Display the arrow icon with dynamic color */}
      <TiArrowSortedDown style={{ color: arrowColor }} 
      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-500"/>
    </div>
  );
};

export default ClickableDropdown;