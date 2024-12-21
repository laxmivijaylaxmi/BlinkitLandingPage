import React from "react";
import logo from "../../assets/Image/logo.png";
import { Link, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import { FaRegCircleUser } from "react-icons/fa6";
import useMobile from "../hooks/useMobile";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";

  return (
    <header className="h-24 lg:h-20 shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white text-black">
      {
        !(isSearchPage && isMobile) && (
          <div className="container mx-auto flex items-center px-2 justify-between">
            {/* Logo */}
            <div className="h-full">
              <Link to="/" className="h-full flex justify-center items-center">
                <img
                  className="hidden lg:block"
                  src={logo}
                  width={130}
                  height={60}
                  alt="logo"
                />
                <img
                  className="lg:hidden"
                  src={logo}
                  width={100}
                  height={60}
                  alt="logo"
                />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:block">
              {!isMobile && <Search />} {/* Hide search bar on mobile */}
            </div>

            {/* Login and Cart Section */}
            <div className="flex items-center gap-4">
              <button className="text-[#FFD500] lg:hidden">
                <FaRegCircleUser size={26} />
              </button>
              <div className="hidden lg:flex items-center gap-4">
                <Link to="/login" className="text-[#FFD500] font-semibold">
                  Login
                </Link>
                <Link to="/cart" className="bg-[#57d860] text-white px-6 py-2 rounded-lg hover:bg-opacity-90">
                  My Cart
                </Link>
              </div>
            </div>
          </div>
        )
      }

      {/* Mobile Search */}
      <div className="container mx-auto px-2 lg:hidden bg-[#F5F5F5] rounded-lg">
        <Search />
      </div>
    </header>
  );
};

export default Header;
