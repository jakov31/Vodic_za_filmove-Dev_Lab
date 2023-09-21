// import { Outlet } from "react-router-dom";
import HeaderLinkButton from "./HeaderLinkButton";

const Header = () => {
  return (
    <>
      <nav className=" flex justify-between content-center p-[20px] w-[100%] bg-green-300">
        <div>Logo</div>
        <div className="flex justify-between w-[60%]">
          <HeaderLinkButton linkText={"Home"} to={"home"} />
          <HeaderLinkButton linkText={"List"} to={"list"} />
          <HeaderLinkButton linkText={"Custom"} to={"custom"} />
          <HeaderLinkButton linkText={"About us"} to={"aboutUs"} />
          <HeaderLinkButton linkText={"padajuçi meni"} />
        </div>

        <div>profil</div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
};

export default Header;
