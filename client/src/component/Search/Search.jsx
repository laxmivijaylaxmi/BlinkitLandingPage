import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaArrowLeft } from "react-icons/fa";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  const isSearchPage = location.pathname === "/search";
  const searchParams = new URLSearchParams(location.search);
  const searchText = searchParams.get("q") || "";


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);   
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const handleRedirectToSearchPage = () => {
    if (!isSearchPage) navigate("/search");
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    navigate(`/search?q=${value}`);
  };

  return (
    <div className="search-container w-full min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border flex items-center  group focus-within:border-primary-200">
      <div>
        {isMobile && isSearchPage ? (
          <Link
            to="/"
            className="back-button flex justify-center items-center h-full p-2 m-1  rounded-full shadow-md group-focus-within:text-primary-200"
            aria-label="Go Back"
          >
            <FaArrowLeft size={20} />
          </Link>
        ) : (
          <button
            className="search-button flex justify-center items-center h-full p-3 group-focus-within:text-primary-200"
            aria-label="Search"
          >
            <IoSearch size={22} />
          </button>
        )}
      </div>

      <div className="input-container w-full h-full">
        {!isSearchPage ? (
    
          <div
            onClick={handleRedirectToSearchPage}
            className="placeholder w-full h-full flex items-center cursor-pointer"
          >
            <TypeAnimation
              sequence={[
                'Search "milk"',
                1000,
                'Search "bread"',
                1000,
                'Search "sugar"',
                1000,
                'Search "paneer"',
                1000,
                'Search "chocolate"',
                1000,
                'Search "curd"',
                1000,
                'Search "rice"',
                1000,
                'Search "egg"',
                1000,
                'Search "chips"',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        ) : (
          // On search page
          <div className="input-wrapper w-full h-full">
            <input
              type="text"
              placeholder="Search for atta, dal, and more..."
              autoFocus
              defaultValue={searchText}
              className="search-input bg-transparent w-full h-full outline-none"
              onChange={handleOnChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
