import { NavLink } from "react-router-dom";
import HeaderLinkButton from "./HeaderLinkButton";

const Header = () => {
  return (
    <>
      <nav className=" flex justify-between content-center p-[20px] w-[100%] bg-green-300">
        <div>Logo</div>
        <div className="flex justify-between w-[60%]">
          <HeaderLinkButton linkText={"tekst"} />
          <HeaderLinkButton linkText={"opcija 1"} />
          <HeaderLinkButton linkText={"opxija 2"} />
          <HeaderLinkButton linkText={"opcija 3 "} />
          <HeaderLinkButton linkText={"padajuçi meni"} />
        </div>

        <div>profil</div>
      </nav>
    </>
  );
};

export default Header;
