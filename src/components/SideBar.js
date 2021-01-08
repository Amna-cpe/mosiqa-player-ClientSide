import React from "react";
import "./styles/index.css";
import SideBarOptions from "./SideBarOptions";
import Home from "@material-ui/icons/HomeOutlined";
import Search from "@material-ui/icons/SearchOutlined";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusicOutlined";
import Person from "@material-ui/icons/Person";
import axios from "axios";
import { useProvider } from "../context/Provider";

import { Link } from "react-router-dom";
import { logout } from "../context/actions";

function SideBar() {
  const [{ user }, dispatch] = useProvider();
  let chosenIcons = {
    home: Home,
    search: Search,
    music: LibraryMusicIcon,
  };

  const logout = () => {
    dispatch({ type: "LOG_OUT" });
    localStorage.removeItem("AuthToken");
    axios.defaults.headers.common["Authorization"] = null;
  };

  return (
    <div className="SideBar">
      <img
        src="https://fontmeme.com/permalink/201231/5f5177f9a48284d39524fe59f802bb4e.png"
        alt=""
      />

      <Link to="/home/homepage">
        <SideBarOptions option="Home" Icon={Home} />
      </Link>
      <Link to="/home/search">
        <SideBarOptions option="Search" Icon={Search} />
      </Link>

      <br />

      <hr />
      {!user.username ? (
        <Link to="/login">
          <SideBarOptions option="SIGN IN" />
        </Link>
      ) : (
        <>
          <SideBarOptions option={`Hello ${user.username} 💚`} />
          <Link to="/home/mysongs">
            <SideBarOptions option="My songs" />
          </Link>
        </>
      )}
      {user.username && <SideBarOptions option="LOGOUT" handleclick={logout} />}
    </div>
  );
}

export default SideBar;
