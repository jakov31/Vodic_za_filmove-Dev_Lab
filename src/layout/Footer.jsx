import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex bottom-0 w-[100%] justify-center fixed border-t-2 border-green-500">
      <div className="flex w-[70%] justify-around p-5">
        <Link to={"home"}> Home</Link>
        <Link to={"/"}>News</Link>
        <Link to={"aboutUs"}>About us</Link>
      </div>
    </footer>
  );
};

export default Footer;
