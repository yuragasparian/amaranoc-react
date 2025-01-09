import React from "react";
import { NavLink } from "react-router";

function MenuItem({props}) {
  return (
    <NavLink to={props.link} className="group">
        <p>{props.title}</p>
        <div className="h-[1px] w-0 transition-all duration-100 bg-orange-400 group-hover:w-full" id="navbar"></div>
    </NavLink>
  );
}

export default MenuItem;
