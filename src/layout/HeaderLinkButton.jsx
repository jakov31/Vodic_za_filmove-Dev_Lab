import { NavLink } from "react-router-dom";

const HeaderLinkButton = ({ linkText, to }) => {
  return (
    <div className="px-[25px] py-[10px] border-2 rounded-md  bg-green-200 border-green-800">
      <NavLink to={to}>{linkText}</NavLink>
    </div>
  );
};

export default HeaderLinkButton;
