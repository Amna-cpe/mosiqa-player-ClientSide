import React, { useEffect, useState } from "react";
import img from "./musi.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { like} from "../context/actions";
import { useProvider } from "../context/Provider";
import { useHistory } from "react-router-dom";

function SongRow({ username, likeCount, songName, songId, url }) {
  const [{ user, songPlaying }, dispatch] = useProvider();
  const history = useHistory();
  const [isLiked, setIsLiked] = useState("");
  const [isClk , setIsClk] = useState(false)
  let playingCSS = isClk ? "songRowClicked" :""




  useEffect(() => {
    setIsLiked(
      user.likes && user.likes.find((l) => l.songId === songId) ? "error" : ""
    );
  }, [user?.likes]);

  useEffect(() => {

      if (songPlaying?.songId === songId) {
      setIsClk(true)
    } else {
 
      setIsClk(false)
      document.getElementById('song').classList.remove('songRowClicked')
           
    }
  }, [songPlaying]);

  const likeTheSong = () => {
    if (user.username) {
      like(songId, dispatch);
    } else {
      history.push("/login");
    }
  };

  const handlePLaySong = () => {
    
    dispatch({
      type: "SET_PLAYING",
      payload: {
        songId,
        url,
      },
    });
  };
  return (
    <div className={`songRow ${playingCSS}` } id="song" onClick={handlePLaySong}>
      <div className="songRow_left">
        <img className="songRow__album" src={img} alt="album" />
        <div className="songRow__info">
          <h1>{songName}</h1>
          <p>{username}</p>
        </div>
      </div>
      <div className="songRow__right">
        <FavoriteIcon
          color={isLiked}
          className="body__shuffle"
          onClick={likeTheSong}
        />
        <small>{likeCount}</small>
      </div>
    </div>
  );
}

export default SongRow;
