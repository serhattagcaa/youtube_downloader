import { TbArrowBigRightFilled } from "react-icons/tb";

const tailwindClasses = "px-auto  bg-gray-300 border-2 border-brown-900";

const YoutubeMpHd4K = () => {
  return (
    <>
      <section className="lg:w-[890px] w-full flex flex-col shadow items-center justify-center bg-[#ffffff] px-4">
        {/* Box /2 */}
        <div className="flex flex-col max-w-[600px] w-full items-center p-2">
          <h1 className="flex lg:text-4xl font-roboto font-light text-2xl mt-2">
          Download video from Youtube 4k, 8k
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
      </section>
    </>
  );
};

export default YoutubeMpHd4K;
