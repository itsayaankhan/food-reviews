import { Avatar } from "@mui/material";
import React from "react";
import {login, logout} from '../../features/userSlice';
import Login from "../Login/Login";


function Header() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <a className="navbar__logo">FOOD</a>
      </div>

      <div className="navbar__right">
        <Avatar
          className="navbar__avatar"
          src="https://placedog.net/640/480?random"
        />

        <div className="navbar__login">
          <button className="navbar__loginBtn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
