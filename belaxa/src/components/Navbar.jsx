import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar bg-black shadow-sm text-white px-4">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Logo */}
          <a className="ml-4">
            <img
              src="/images/Navbar/Belaxa.png"
              alt="Logo"
              className="h-[30px] w-[150px]"
            />
          </a>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            <li><a>Services</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
            <li><a>Team</a></li>
            <li><a>Blog</a></li>
          </ul>
        </div>

        {/* Navbar End (Button) */}
        <div className="navbar-end hidden lg:flex mr-4">
          <div className="p-[2px] rounded-md bg-gradient-to-r from-[#FC31B9] to-[#09F7CC]">
            <a className="btn border-none bg-black text-white rounded-md px-5 py-2">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black text-white px-6 py-4 space-y-4">
          <a className="block">Services</a>
          <a className="block">Portfolio</a>
          <a className="block">About</a>
          <a className="block">Team</a>
          <a className="block">Blog</a>
          <div className="p-[2px] rounded-md bg-gradient-to-r from-[#FC31B9] to-[#09F7CC] inline-block">
            <a className="btn border-none bg-black text-white rounded-md px-5 py-2">
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
