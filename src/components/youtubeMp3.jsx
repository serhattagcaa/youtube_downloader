import { TbArrowBigRightFilled } from "react-icons/tb";

const tailwindClasses = "px-auto  bg-gray-300 border-2 border-brown-900";

const YoutubeMp3 = () => {
  return (
    <>
      <section className="lg:w-[890px] w-full flex flex-col shadow items-center justify-center bg-[#ffffff] px-4">
        {/* Box /2 */}
        <div className="flex flex-col max-w-[600px] w-full items-center p-2">
          <h1 className="flex lg:text-4xl font-roboto font-light text-2xl mt-2">
            Convert Youtube to MP3
          </h1> 
          <form className="w-full flex py-8 px-8 items-center">
            <input
              type="text"
              placeholder="Search or paste link here..."
              className="min-w-0 grow border border-[#f20a51] rounded-l-searchthree pl-[13px] pr-full p-2"
              style="font-family: 'Roboto', sans-serif; font-weight: 300;"
           />
            <button
              type="submit"
              className="bg-[#f20a51] border border-[#f20a51] text-white py-3 md:py-2 px-4 rounded-r-searchthree flex items-center"
            >
              <span className="md:block hidden mr-2">Start</span>
              <TbArrowBigRightFilled className="ml-auto" />
            </button>
          </form>
        </div>
        <hr class="w-full border-solid border-1 border-black" />
        {/* Yazılar */}
        <div className="lg:flex bg-white py-4 space-x-3">
          <div className="lg:w-1/2 space-y-4">
            <h1 className="lg:text-2xl text-base font-roboto font-light">
              How to convert YouTube videos to MP3?
            </h1>
            <ul className="space-y-4 font-roboto font-light text-[17px]">
              <li>1. Enter keywords or YouTube URL into the search box.</li>
              <li>
                2. Choose MP3 with the quality you want to convert and click the
                "Download" button.
              </li>
              <li>
                3. Wait until the conversion is completed and download the file.
                Very easy and fast.
              </li>
            </ul>
            <p className="font-roboto font-light text-[17px]">
              <strong className="font-roboto font-bold">Tip:</strong> Insert "
              <strong className="font-roboto font-bold">zz</strong>" after the
              word "youtube" in the link to download videos and MP3 files from
              YouTube as a faster way.
            </p>
            <img
              src="tip-download-youtube.jpg"
              alt="Tip: How to quickly download YouTube video MP3"
            />
          </div>
          <div className="lg:w-1/2 grid gap-4 md:grid-cols-2 grid-cols-1">
            <span className={tailwindClasses}>Box 1</span>
            <span className={tailwindClasses}>Box 2</span>
            <span className={tailwindClasses}>Box 3</span>
            <span className={tailwindClasses}>Box 4</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default YoutubeMp3;
