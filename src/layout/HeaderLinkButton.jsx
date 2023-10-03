import { NavLink } from "react-router-dom";

const HeaderLinkButton = ({ linkText, to, mouseIn, mouseOut }) => {
  return (
    <>
      <div
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
        className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:hover:underline md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        <NavLink
          className={({ isActive }) => (isActive ? "text-white underline" : "")}
          to={to}
        >
          {linkText}
        </NavLink>
      </div>
    </>
  );
};

export default HeaderLinkButton;
