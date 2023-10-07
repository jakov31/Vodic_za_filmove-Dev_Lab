import { Link } from "react-router-dom";

const LinkStyle = "mt-2 hover:underline md:hover:text-[#c11919] py-3";

const HeaderDropDown = ({ toggleDropdown }) => {
  return (
    <ul
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
      className="absolute p-4 mt-8 bg-slate-50 rounded-md border-slate-800 shadow-lg"
    >
      <Link
        className={LinkStyle}
        to={{
          pathname: "/movies",
        }}
        state={{ category: "ime" }}
      >
        <li>Comedy</li>
      </Link>
      <Link
        className={LinkStyle}
        to={{
          pathname: "/movies",
        }}
        state={{ category: "kategorija 2" }}
      >
        <li>Thriller</li>
      </Link>
      <hr />
      <Link
        className={LinkStyle}
        to={{
          pathname: "/movies",
        }}
        state={{ category: "kategorija 3" }}
      >
        <li> Serije</li>
      </Link>
    </ul>
  );
};

export default HeaderDropDown;
