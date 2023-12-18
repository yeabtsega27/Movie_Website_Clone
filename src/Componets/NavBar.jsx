import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <div className=" w-[80%] h-20 m-auto flex justify-between items-center">
      <img src={Logo} alt="" className=" w-20 h-20" />
      <div className="w-[50%] h-10 flex ">
        <SearchInput />
      </div>
      <ul className=" flex gap-5">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/movies">
          <li>Movies</li>
        </NavLink>
        <NavLink to="/shows">
          <li>Shows</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
