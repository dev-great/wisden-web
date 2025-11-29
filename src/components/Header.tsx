import { useState, useRef, useEffect } from "react";
import Dlogo from "../assets/images/new/logoD.png";
import { Link } from "react-router-dom";
import { Search, Settings, Sun, Moon, Monitor, ChevronDown, Menu, X, User } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [downloadsOpen, setDownloadsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>("light");
  const setTheme = useTheme();

  const searchRef = useRef<HTMLLIElement | null>(null);
  const settingsRef = useRef<HTMLLIElement | null>(null);
  const supportRef = useRef<HTMLLIElement | null>(null);
  const downloadsRef = useRef<HTMLLIElement | null>(null);

  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  // Get user's first name or initials
  const getUserDisplay = () => {
    if (user?.first_name) {
      return user.first_name;
    }
    if (user?.email) {
      return user.email.split("@")[0];
    }
    return "User";
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setSettingsOpen(false);
      }
      if (supportRef.current && !supportRef.current.contains(event.target as Node)) {
        setSupportOpen(false);
      }
      if (downloadsRef.current && !downloadsRef.current.contains(event.target as Node)) {
        setDownloadsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle theme change
  const handleThemeChange = (theme: "light" | "dark" | "auto") => {
    setCurrentTheme(theme);
    setTheme(theme);
  };

  // Initialize theme state on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "auto" | null;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 xl:h-20">
            {/* Logo */}
            <Link className="flex-shrink-0" to="/">
              <img className="h-10" src={Dlogo} alt="logo" />
            </Link>

            {/* Mobile menu button */}
            <button className="xl:hidden ml-auto mx-3 p-2 rounded-md hover:bg-gray-100 transition-colors text-gray-700" type="button" aria-controls="navbarCollapse" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={() => setIsOpen((v) => !v)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Main navbar */}
            <div className={`${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 xl:max-h-screen xl:opacity-100"} absolute xl:relative top-full left-0 right-0 xl:top-auto bg-white xl:bg-transparent overflow-hidden xl:overflow-visible transition-all duration-300 xl:flex xl:items-center xl:mx-auto z-50 shadow-lg xl:shadow-none`} id="navbarCollapse">
              <ul className="flex flex-col xl:flex-row xl:items-center xl:space-x-1 p-4 xl:p-0">
                {/* Nav item Home */}
                <li>
                  <Link className="block py-2 px-3 text-gray-700 hover:text-blue-500 transition-colors font-medium" to="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>

                {/* Nav item About Us */}
                <li>
                  <Link className="block py-2 px-3 text-gray-700 hover:text-blue-500 transition-colors font-medium" to="/about-us" onClick={() => setIsOpen(false)}>
                    About Us
                  </Link>
                </li>

                {/* Nav item Rooms */}
                <li>
                  <Link className="block py-2 px-3 text-gray-700 hover:text-blue-500 transition-colors font-medium" to="/rooms" onClick={() => setIsOpen(false)}>
                    Rooms
                  </Link>
                </li>

                {/* Nav item Contact Us */}
                <li>
                  <Link className="block py-2 px-3 text-gray-700 hover:text-blue-500 transition-colors font-medium" to="/contact" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </li>

                {/* Nav item Support Dropdown */}
                <li className="relative" ref={supportRef}>
                  <button className="flex items-center gap-1 py-2 px-3 text-gray-700 hover:text-blue-500 transition-colors font-medium w-full xl:w-auto" onClick={() => setSupportOpen((v) => !v)}>
                    Support
                    <ChevronDown size={16} className={`transition-transform ${supportOpen ? "rotate-180" : ""}`} />
                  </button>
                  <ul className={`${supportOpen ? "block" : "hidden"} xl:absolute xl:top-full xl:left-0 xl:mt-1 xl:w-48 bg-white xl:shadow-lg xl:rounded-lg xl:border border-gray-200 py-2 xl:py-1`}>
                    <li>
                      <Link
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors"
                        to="/privacy-policy"
                        onClick={() => {
                          setSupportOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors"
                        to="/terms-of-service"
                        onClick={() => {
                          setSupportOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors"
                        to="/faq"
                        onClick={() => {
                          setSupportOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Nav item Downloads Dropdown */}
                <li className="relative" ref={downloadsRef}>
                  <button className="flex items-center gap-1 py-2 px-3 text-gray-700 hover:text-blue-500 transition-colors font-medium w-full xl:w-auto" onClick={() => setDownloadsOpen((v) => !v)}>
                    Downloads
                    <ChevronDown size={16} className={`transition-transform ${downloadsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <ul className={`${downloadsOpen ? "block" : "hidden"} xl:absolute xl:top-full xl:left-0 xl:mt-1 xl:w-48 bg-white xl:shadow-lg xl:rounded-lg xl:border border-gray-200 py-2 xl:py-1`}>
                    <li>
                      <Link
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors"
                        to="#"
                        onClick={() => {
                          setDownloadsOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        iOS Download
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors"
                        to="#"
                        onClick={() => {
                          setDownloadsOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        Android Download
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Mobile Auth Buttons */}
                <li className="xl:hidden mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-col gap-3">
                    <Link to="/contact" className="block py-2 px-4 text-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                    {isAuthenticated ? (
                      <Link to="/booking" className="flex items-center justify-center gap-2 py-2 px-4 bg-blue-400 text-gray-900 rounded-lg hover:bg-blue-500 font-medium transition-colors" onClick={() => setIsOpen(false)}>
                        <User size={18} />
                        {getUserDisplay()}
                      </Link>
                    ) : (
                      <Link to="/login" className="block py-2 px-4 text-center bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-medium transition-colors" onClick={() => setIsOpen(false)}>
                        Login
                      </Link>
                    )}
                  </div>
                </li>
              </ul>
            </div>

            {/* Right side icons and buttons */}
            <div className="flex items-center gap-2">
              {/* Search dropdown */}
              <ul className="flex items-center space-x-2">
                <li className="relative hidden sm:block" ref={searchRef}>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700" onClick={() => setSearchOpen((v) => !v)} aria-label="Search">
                    <Search size={18} />
                  </button>
                  <div className={`${searchOpen ? "block" : "hidden"} absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-200 p-3 z-50`}>
                    <form className="flex">
                      <input className="flex-1 px-3 py-2 border border-blue-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="search" placeholder="Search..." aria-label="Search" />
                      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-md transition-colors" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </li>

                {/* Settings dropdown */}
                <li className="relative" ref={settingsRef}>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700" onClick={() => setSettingsOpen((v) => !v)} aria-label="Settings">
                    <Settings size={18} />
                  </button>

                  <div className={`${settingsOpen ? "block" : "hidden"} absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-3 z-50`}>
                    <div className="px-4 py-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 text-sm">Mode:</span>
                        <div className="flex items-center space-x-1">
                          <button type="button" onClick={() => handleThemeChange("light")} className={`p-2 rounded-md transition-colors ${currentTheme === "light" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100 text-gray-600"}`} title="Light">
                            <Sun size={16} />
                          </button>
                          <button type="button" onClick={() => handleThemeChange("dark")} className={`p-2 rounded-md transition-colors ${currentTheme === "dark" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100 text-gray-600"}`} title="Dark">
                            <Moon size={16} />
                          </button>
                          <button type="button" onClick={() => handleThemeChange("auto")} className={`p-2 rounded-md transition-colors ${currentTheme === "auto" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100 text-gray-600"}`} title="Auto">
                            <Monitor size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Desktop Auth Buttons */}
              <div className="hidden xl:flex items-center gap-3 ml-4">
                <Link to="/contact" className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                  Contact Us
                </Link>

                {isAuthenticated ? (
                  <Link to="/booking" className="flex items-center gap-2 px-5 py-2 bg-blue-400 text-gray-900 rounded-lg hover:bg-blue-500 font-medium transition-colors">
                    <User size={18} />
                    {getUserDisplay()}
                  </Link>
                ) : (
                  <Link to="/login" className="px-5 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-medium transition-colors">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
