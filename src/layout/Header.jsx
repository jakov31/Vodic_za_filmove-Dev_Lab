import { Link } from "react-router-dom";
import HeaderLinkButton from "./HeaderLinkButton";

const Header = () => {
  return (
    <>
      <nav className="w-full flex justify-between content-center p-[20px]  bg-green-300">
        <div>Logo</div>
        <div className="flex justify-between w-[60%]">
          <HeaderLinkButton linkText={"Home"} to={"home"} />
          <HeaderLinkButton linkText={"List"} to={"list"} />
          <HeaderLinkButton linkText={"Custom"} to={"custom"} />
          <HeaderLinkButton linkText={"About us"} to={"aboutUs"} />
          <HeaderLinkButton linkText={"padajuçi meni"} />
        </div>

        <Link to={"userProfile"}>profil</Link>
      </nav>
    </>
  );
};

export default Header;
