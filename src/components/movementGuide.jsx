import { BiLike } from "react-icons/bi";
import { FaWrench } from "react-icons/fa";
import { RiUploadCloud2Fill } from "react-icons/ri";

const MovementGuide = () => {
  return (
    <article className="lg:w-[890px] w-full px-4">
      <div className="py-10">
        <h1 className="text-center lg:text-2xl text-lg font-roboto font-bold pb-3 text-[#293946]">
          Y2Meta.app - Your best YouTube to MP3 Converter
        </h1>
        <p className="text-center font-roboto font-light text-[17px]">
          Y2Meta.app - This converter allows you to convert YouTube videos to
          MP3 files with just a few clicks. It supports all formats, such as MP3
          (128kbps, 320kbps, 64kbps, 96kbps, 192kbps, 256 kbps), AAC, MP4, M4V,
          3GP, WMV, WMA, FLV, MO, WEBM, etc. You can now easily convert
          thousands of videos from YouTube into your favorite songs. It has
          never been easier to convert YouTube to MP3.
        </p>
      </div>
      <hr class="w-full border-solid border-1 border-black" />
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 px-4">
        <div>
          <img src="star.svg" alt="star icon"
          className="size-10 mx-auto text-[#293946] m-4"/>
          <h1 className="text-center text-2xl font-roboto font-semibold text-rose-700 m-2">Full platforms supported</h1>
          <p className="text-center font-roboto font-light text-[17px]">
            We support all platforms. Easy to convert YouTube videos to MP3
            files regardless of whether you are using Windows, Mac or Linux,
            Android, iPhone
          </p>
        </div>
        <div>
          <BiLike className="size-10 mx-auto text-[#293946] m-4"/>
          <h1 className="text-center text-2xl font-roboto font-semibold text-rose-700 m-2">Easily converting</h1>
          <p className="text-center font-roboto font-light text-[17px]">
            No register accounts needed. All you need to do is to enter the
            video's url that you wish to convert & download. Select the format
            then click "download" to start the converting process.
          </p>
        </div>
        <div>
          <FaWrench className="size-10 mx-auto text-[#293946] m-4"/>
          <h1 className="text-center text-2xl font-roboto font-semibold text-rose-700 m-2">Full file format supported </h1>
          <p className="text-center font-roboto font-light text-[17px]">
            We support all video and audio formats conversion. You can easily
            convert YouTube videos to MP3, 3GP, MP4, WMA, M4A, FLV, WEBM and MO
            formats, etc.
          </p>
        </div>
        <div>
          <RiUploadCloud2Fill className="size-10 mx-auto text-[#293946] m-4"/>
          <h1 className="text-center text-2xl font-roboto font-semibold text-rose-700 m-2">Upload to cloud</h1>
          <p className="text-center font-roboto font-light text-[17px]">
            We support uploading the converted files to your DropBox and Google
            Drive.
          </p>
        </div>
      </div>
    </article>
  );
};

export default MovementGuide;
