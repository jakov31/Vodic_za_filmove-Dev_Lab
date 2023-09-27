import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import HeaderLinkButton from "./HeaderLinkButton";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="w-full flex justify-between content-center p-[20px]  bg-[#c11919]">
        <div>Logo</div>
        <div className="flex justify-between w-3/5">
          <HeaderLinkButton linkText={"Home"} to={"home"} />
          <div>
            <HeaderLinkButton
              linkText={"Movies"}
              to={"movies"}
              mouseIn={toggleDropdown}
              mouseOut={toggleDropdown}
            />
            {isDropdownOpen && (
              <p className="absolute top rounded-full mt-2 bg-white border border-gray-300 shadow-md p-2">
                isDropdownOpen
              </p>
            )}
          </div>
          <HeaderLinkButton linkText={"Custom"} to={"custom"} />
          <HeaderLinkButton linkText={"About us"} to={"aboutUs"} />
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
