import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import HeaderLinkButton from "./HeaderLinkButton";
import { useState } from "react";
import HeaderDropDown from "./HeaderDropDown";
import { useContext } from "react";
import UserContext from "../UserContext";
import ButtonClassic from "../components/ButtonClassic";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userCtx = useContext(UserContext);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="navbar  bg-[#c11919]">
      <div className="navbar-start">
        <a className=" text-xl hidden md:inline-block">
          <img
            className="w-[50px] ml-[auto]"
            src="./assets/movie-svgrepo-com.svg"
            alt="Logo"
          />
        </a>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <img
              className="w-[50px] ml-[auto]"
              alt="Logo"
              src="./src/assets/movie-svgrepo-com.svg"
            />
            <FaCaretDown />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="bg-[#c11919] rounded-md mt-1">
              <HeaderLinkButton linkText={"Home"} to={"/"} />
            </li>
            <li className="bg-[#c11919] rounded-md mt-1">
              <HeaderLinkButton linkText={"Movies"} to={"movies"} />
            </li>

            <li className="bg-[#c11919] rounded-md mt-1">
              <HeaderLinkButton linkText={"About us"} to={"aboutUs"} />
            </li>
            <li className="bg-[#c11919] rounded-md mt-1">
              <HeaderLinkButton linkText={"Contact us"} to={"contactUs"} />
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <HeaderLinkButton linkText={"Home"} to={"/"} />
          </li>
          <li>
            <HeaderLinkButton
              linkText={"Movies"}
              to={"movies"}
              mouseIn={toggleDropdown}
              mouseOut={toggleDropdown}
            />
            {isDropdownOpen && (
              <HeaderDropDown toggleDropdown={toggleDropdown} />
            )}
          </li>

          <li>
            <HeaderLinkButton linkText={"About us"} to={"aboutUs"} />
          </li>
          <li>
            <HeaderLinkButton linkText={"Contact us"} to={"contactUs"} />
          </li>
          {userCtx.admin && (
            <li>
              <HeaderLinkButton linkText={"Admin Page"} to={"adminPage"} />
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {userCtx.isUserLogedIn ? (
          <Link to={"userProfile"}>
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://robohash.org/beataesimiliqueomnis.png?size=50x50&set=set1" />
              </div>
            </label>
          </Link>
        ) : (
          <Link to={"login"}>
            <ButtonClassic buttonText={"Log In/Sign In"} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
