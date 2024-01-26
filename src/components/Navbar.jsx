import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { useState } from 'preact/hooks';
import ClickableDropdown from '../layouts/ClickableDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggle = (setFunc, state) => setFunc(!state);

  const links = [
    { to: "/youtubeMpHd4K", text: "Youtube HD 4K" },
    { to: "/youtubeMp4", text: "Youtube to MP4" },
    { to: "/youtubeMp3", text: "Youtube to MP3" },
  ];

  return (
    <nav className="lg:w-[890px] lg:h-[70px] w-full h-full bg-[#f9f9f9] flex flex-wrap items-center justify-between">
      <div className="w-full md:w-[200px] h-[70px] bg-[#f9f9f9] flex justify-between items-center">
        <Link to="/" className="flex items-center justify-between space-x-2 hover:text-rose-700 mx-4 lg:mx-0">
          <img src="logo.png" alt="Website Logo" className="size-12" />
          <span className="font-roboto font-bold text-2xl">Y2Meta.app</span>
        </Link>

        <button
          className="mx-4 text-4xl cursor-pointer text-gray-700 hover:text-rose-700 md:hidden"
          onClick={() => toggle(setIsOpen, isOpen)}
        >
          <IoMenu />
        </button>
      </div>
      <div
        className={`w-full md:w-auto bg-[#f9f9f9] ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-end`}
      >
        <ul className="md:flex items-center justify-between w-full">
          {links.map(({ to, text }) => (
            <li
              key={to}
              className="w-[150px] h-[70px] flex items-center justify-center text-sm hover:text-rose-700 hover:bg-[#eeeeee]"
              onClick={() => setIsOpen(false)}
            >
              <Link to={to}>{text}</Link>
            </li>
          ))}

          <li onClick={() => toggle(setDropdownOpen, isDropdownOpen)}>
            <ClickableDropdown
              isOpen={isDropdownOpen}
              closeDropdown={() => setDropdownOpen(false)}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
