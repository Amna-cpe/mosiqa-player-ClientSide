import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { addSong, search } from "../context/actions";
import Add from "@material-ui/icons/AddCircleRounded";
import { useProvider } from "../context/Provider";
import { useHistory } from "react-router-dom";

function Header() {
  const [{ user }, dispatch] = useProvider();
  const [searchValue, setsearchValue] = useState("");

  const history = useHistory();

  const handleChange = () => {
    let files = document.getElementById("songInput").files[0];
    if (files) {
      addSong(files, dispatch);
    }
  };

  const handleSearchChange = (e) => {
    setsearchValue(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    search(searchValue, dispatch);
    history.push("/home/search");
  };


  return (
    <div className="header">
      <div className="header__left">
        <input
          placeholder="Search for a song"
          type="text"
         
          value={searchValue}
          onChange={handleSearchChange}
        />
        <SearchIcon className="body__shuffle" onClick={handleSearchClick} />
      </div>
      <div className="header__right">
        <label for="songInput">
          {user.username && (
            <Add id="add" className="body__shuffle" fontSize="large" />
          )}
        </label>{" "}
        <input
          type="file"
          id="songInput"
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Header;
