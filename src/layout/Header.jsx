import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import HeaderLinkButton from "./HeaderLinkButton";
import { useState } from "react";
import HeaderDropDown from "./HeaderDropDown";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="w-full  flex justify-between content-center p-[20px]  bg-[#c11919]">
        <div>
          <img
            className="w-[50px] ml-[auto]"
            src="./assets/movie-svgrepo-com.svg"
            alt="Logo"
          />
        </div>

        <div className="flex justify-evenly w-[60%]">
          <HeaderLinkButton linkText={"Home"} to={"home"} />
          <div>
            <HeaderLinkButton
              linkText={"Movies"}
              to={"movies"}
              mouseIn={toggleDropdown}
              mouseOut={toggleDropdown}
            />
            {isDropdownOpen && (
              <HeaderDropDown toggleDropdown={toggleDropdown} />
            )}
          </div>
          <HeaderLinkButton linkText={"About us"} to={"aboutUs"} />
          <HeaderLinkButton linkText={"Contact us"} to={"contactUs"} />
        </div>

        <Link to={"userProfile"}>
          <FaUserCircle className="w-7" />
          <p>@username</p>
        </Link>
      </nav>
    </>
  );
};

export default Header;
