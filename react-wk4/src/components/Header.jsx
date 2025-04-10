import { Link } from "react-router";
import Navbar from "./Navbar";

function Header({ title, slogan }) {
  return (
    <header className="text-center flex flex-col items-center header pt-24">
      <Link to="/">
        <h2 className="text-slate-500 pb-2 text-4xl font-black">{title}</h2>
      </Link>

      <p className="text-gray-400 text-opacity-80 text-normal leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
        {slogan}
      </p>
      <div className="flex mt-3 justify-center">
        <hr className="my-[25px] mx-auto w-[100px] border-0 border-t-[6px] border-slate-300 opacity-100 rounded" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
