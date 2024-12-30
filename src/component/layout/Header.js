import { ChevronDown, LogIn, Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/img/logo.png";
import ButtonLink from "../../core/ButtonLink";

function Header() {
  const [showLanguage, setShowLanguage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  return (
    <header className="bg-[#1A1A37] w-full relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <img src={logo} alt="Logo" className="h-10" />

          <button
            className="lg:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <ButtonLink text="Home" link="/" />
                </li>
                <li>
                  <ButtonLink text="Find a hospital" />
                </li>
                <li>
                  <ButtonLink text="Service" />
                </li>
                <li>
                  <ButtonLink text="About us" link="/aboutus" />
                </li>
                <li>
                  <ButtonLink text="Contact Us" link="/contactus" />
                </li>
                <li>
                  <ButtonLink text="Login" />
                </li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  className="flex items-center uppercase xl:text-[16px] md:text-[12px] "
                  onClick={() => setShowLanguage(!showLanguage)}
                >
                  Language
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {showLanguage && (
                  <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg py-2 min-w-[120px]">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                      English
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                      Tiếng Việt
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          />
          <div className="fixed inset-y-0 right-0 w-[280px] bg-[#1A1A37] z-50 transform transition-transform duration-300 ease-in-out">
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>

            <div className="p-6 pt-16">
              <nav className="mb-8">
                <ul className="space-y-4">
                  <li>
                    <ButtonLink text="Home" className="block w-full" />
                  </li>
                  <li>
                    <ButtonLink
                      text="Find a hospital"
                      className="block w-full"
                    />
                  </li>
                  <li>
                    <ButtonLink text="Service" className="block w-full" />
                  </li>
                  <li>
                    <ButtonLink text="About us" className="block w-full" />
                  </li>
                  <li>
                    <ButtonLink text="Contact us" className="block w-full" />
                  </li>
                  <li>
                    <ButtonLink text="Login" className="block w-full" />
                  </li>
                </ul>
              </nav>
              <div className="space-y-4">
                <div className="relative">
                  <button
                    className="flex items-center uppercase w-full xl:text-[16px] md:text-[12px] "
                    onClick={() => setShowLanguage(!showLanguage)}
                  >
                    Language
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>

                  {showLanguage && (
                    <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg py-2 w-full">
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                        English
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                        Tiếng Việt
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
