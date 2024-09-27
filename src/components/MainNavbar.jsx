import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from '../assets/Icons/logo.png';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling Down
        setIsScrollingUp(false);
      } else {
        // Scrolling Up
        setIsScrollingUp(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={` fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 bg-blue-900 bg-opacity-20 backdrop-blur-xl border border-white/10 shadow-lg  ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2 ">
        <h1 className="text-white text-lg font-semibold flex justify-center items-center gap-2">
          <img src={logo} alt="logo" className="h-10" />
          PixelFace
        </h1>

       
        <button
          onClick={handleMenuToggle}
          className="text-white md:hidden focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>


        <ul className={`hidden md:flex space-x-6 text-white text-base font-medium`}>
          {user ? (
            <>
              <li>
                <Link
                  to="/signout"
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Sign Out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/signin"
                  className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

     
      {isMenuOpen && (
        <div className="bg-blue-900 bg-opacity-80 backdrop-blur-xl border border-white/10 md:hidden">
          <ul className="flex flex-col space-y-2 text-white text-base font-medium p-4">
            {user ? (
              <li>
                <Link
                  to="/signout"
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-lg shadow-md transition duration-300 ease-in-out block w-2/3 m-auto text-center"
                >
                  Sign Out
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/signin"
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-lg shadow-md transition duration-300 ease-in-out block w-2/3 m-auto text-center"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-lg shadow-md transition duration-300 ease-in-out block w-2/3 m-auto text-center"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;