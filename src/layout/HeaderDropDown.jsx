import { Link } from "react-router-dom"

const LinkStyle = "mt-2 hover:underline md:hover:text-[#c11919] py-3"

const HeaderDropDown = ({toggleDropdown}) => {
    return (
        <ul onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} className="absolute top rounded mt-0 bg-white border border-gray-300 shadow-md p-2">
        <Link className={LinkStyle} to={"movies"}><li>Kategorija 1</li></Link>
        <Link className={LinkStyle} to={"movies"}><li>Kategorija 2</li></Link>
        <Link className={LinkStyle} to={"movies"}><li>Kategorija 3</li></Link>
      </ul>
    )
}


export default HeaderDropDown