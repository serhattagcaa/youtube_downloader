import { IoMenu } from "react-icons/io5";
import { useState } from 'preact/hooks';
import ClickableDropdown from "../layouts/ClickableDropdown";

const Navbar = () => {
  // These are the states for the navigation and dropdown menus
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // This function toggles the state
  const toggle = (setFunc, state) => setFunc(!state);

  // These are the links for the navigation menu
  const links = [
    { href: "/youtubeMpHd4K", text: "Youtube HD 4K" },
    { href: "/youtubeMp4", text: "Youtube to MP4" },
    { href: "/youtubeMp3", text: "Youtube to MP3" }
  ];

  return (
    <nav className="w-full bg-[#f9f9f9] flex flex-wrap items-center justify-center">
      <div className="w-full md:w-[200px] h-[75px] bg-[#f9f9f9] flex justify-between items-center">
        <a href="/youtubeMpHd4K" hx-get="/youtubeMpHd4K" 
         className="flex items-center justify-between space-x-2 hover:text-rose-700 mx-4 lg:mx-0">
          <img src="logo.png" alt="Website Logo" className="size-12" />
          <span className="font-navText text-2xl">Y2Meta.app</span>
        </a>
        
        {/* This is the menu icon */}
        <button className="mx-4 text-4xl cursor-pointer text-gray-700 hover:text-rose-700 md:hidden"
          onClick={() => toggle(setIsOpen, isOpen)}>
           <IoMenu /> 
        </button>
      </div>
      <div className={`w-full md:w-auto bg-[#f9f9f9] p-4 ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-end`}>
        <ul className="md:flex items-center justify-between w-full">
          {links.map(({ href, text }) => (
            <li className="w-[150px] h-[75px] flex items-center justify-center hover:text-rose-700 hover:bg-[#eeeeee]" 
              onClick={() => setIsOpen(false)}>

              {/* These are the navigation links */}  
              <a href={href} hx-get={href}>{text}</a> 
            </li>
          ))}
         
          {/* This is the dropdown menu */}
          <li onClick={() => toggle(setDropdownOpen, isDropdownOpen)}>
            <ClickableDropdown isOpen={isDropdownOpen} closeDropdown={() => setDropdownOpen(false)} /> 
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 