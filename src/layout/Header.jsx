import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import HeaderLinkButton from "./HeaderLinkButton";

const Header = () => {
  return (
    <>
      <nav className="w-full flex justify-between content-center p-[20px]  bg-[#c11919]">
        <div>Logo</div>
        <div className="flex justify-between w-3/5">
          <HeaderLinkButton linkText={"Home"} to={"home"} />
          <HeaderLinkButton linkText={"Movies"} to={"movies"} />
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
