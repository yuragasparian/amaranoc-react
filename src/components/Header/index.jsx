import React from "react";
import Logo from "../../assets/logo.svg";
import Globe from "../../assets/icons/globe.svg";
import User from "../../assets/icons/user.svg";
import Search from "../../assets/icons/search.svg";
import MenuItem from "./MenuItem";
import { menus } from "./Menus";
import { Link } from "react-router";

function Header() {
  return (
    <div className="flex justify-between items-center py-8 px-14 sticky left-0 top-0 right-0 bg-white z-[1001] border-b">
      <Link to="/home">
        <img src={Logo} alt="AMARANOC" width={160} height={44} />
      </Link>

      <div className="flex justify-center gap-12">
        {menus.map((menu) => (
          <MenuItem key={menu.id} props={menu} />
        ))}
      </div>

      <div className="flex justify-center gap-6 items-center relative">
        <img src={Globe} alt="Lang" />
        <Link to="/login">
          <img src={User} alt="Login" />
        </Link>

        <input
          type="text"
          className="border-black border rounded-full p-2 px-3 "
          placeholder="Search"
        />
        <img src={Search} alt="" className="absolute right-4" />
      </div>
    </div>
  );
}

export default Header;
