import { NavLink } from "react-router-dom";
import { useState } from "react";

const HeaderLinkButton = ({ linkText, to, mouseIn, mouseOut }) => {
  return (
    <>
      <div
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
