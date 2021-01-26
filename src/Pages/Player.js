import React from "react";
import SideBar from "../components/SideBar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import "./styles/index.css";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        {/* side bar */}
        <SideBar />
        {/* body */}
        <Body />
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Player;
