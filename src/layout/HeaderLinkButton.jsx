import { NavLink } from "react-router-dom";

const HeaderLinkButton = ({ linkText, to, mouseIn, mouseOut }) => {
  return (
    <>
      <div
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
        className="text-white"
      >
        <NavLink
          className={({ isActive }) => (isActive ? " underline" : "")}
          to={{
            pathname: to,
            // state: { title: "from home page" },
          }}
          // params={":asda"}
        >
          {linkText}
        </NavLink>
      </div>
    </>
  );
};

export default HeaderLinkButton;
