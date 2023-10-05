import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex bottom-0 w-full justify-center relative bg-[#c11919] text-white border-t-2 border-[#c11919]">
      <div className="flex w-[70%] justify-around p-5">
        <Link to={"home"}> Home</Link>
        <Link to={"/"}>News</Link>
        <Link to={"aboutUs"}>About us</Link>
      </div>
    </footer>
  );
};

export default Footer;
