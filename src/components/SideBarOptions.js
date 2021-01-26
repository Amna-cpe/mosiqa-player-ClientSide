import React, {  useEffect } from "react";
import { useHistory } from "react-router-dom";
import HomeFilled from "@material-ui/icons/Home";
import SearchFilled from "@material-ui/icons/Search";
import LibraryMusicFilled from "@material-ui/icons/LibraryMusic";

function SideBarOptions({ option, Icon, handleclick }) {
  const history = useHistory();
  let path = history.location.pathname;
  let selectedStyle 
  let Iconn  = Icon
  if (option === "Home" && path === "/home/homepage") {
    console.log('it is ?')
    Iconn = HomeFilled;
    selectedStyle= {color:"#fafafa"}
  }else
    
  if (option === "Search" && path === "/home/search") {
    console.log('it is ?')
    Iconn = SearchFilled;
    selectedStyle= {color:"#fafafa"}
  }

else if (option === "music" && path === "/home/music") {
    console.log('it is ?')
    Iconn = LibraryMusicFilled;
    selectedStyle= {color:"#fafafa"}
  }

  useEffect(() => {
    console.log(path);

    if (option === "Home" && path === "/home/homepage") {
      console.log('it is ?')
      Iconn = HomeFilled;
    }else

    
    if (option === "Search" && path === "/home/search") {
      console.log('it is ?')
      Iconn = SearchFilled;
    }
    else if (option === "music" && path === "/home/music") {
      console.log('it is ?')
      Iconn = LibraryMusicFilled;
    }
  }, [path]);



 

  return (
    <div className="option"  style={selectedStyle}  onClick={handleclick}>
      {Iconn && <Iconn className="option__Icon" />}
 
      {Icon ? <h4    >{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SideBarOptions;
