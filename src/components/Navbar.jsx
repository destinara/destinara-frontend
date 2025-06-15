import { useEffect, useState } from "react";
import { LogoDestinara } from "../assets";
import { User } from "lucide-react";
import { Link, useNavigate } from "react-router";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Changed hovered to isOpen
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Function to toggle the menu
  };

  const handleLogout = () => {
    // Clear all localStorage items
    localStorage.clear();

    // Close the menu
    setIsOpen(false);

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white flex  items-center justify-between px-4 md:px-10 lg:px-20 py-4 transition-shadow ${
        scrolled ? "bg-white/50 backdrop-blur-3xl shadow" : ""
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={LogoDestinara} alt="logo-destinara" className="h-8 md:h-10" />
      </Link>

      {/* User Icon + Popup */}
      <div className="relative">
        <User
          className="w-6 h-6 text-gray-700 cursor-pointer md:w-7 md:h-7"
          onClick={toggleMenu} // Added onClick to toggle the menu
        />

        {isOpen && ( // Changed hovered to isOpen
          <div className="absolute right-0 z-10 w-40 mt-2 border border-gray-200 rounded-lg shadow-xl">
            <ul className="text-sm text-gray-700">
              {/* <li className="px-4 py-2 rounded-t-lg cursor-pointer hover:bg-gray-100">
                <Link to="/profile">Profile</Link>
              </li> */}
              <li
                className="px-4 py-2 text-red-500 bg-red-100 rounded-lg cursor-pointer hover:bg-red-200"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
