import React, { useEffect, useState } from "react";
import "./styles/index.css";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNext from "@material-ui/icons/SkipNext";
import Shuffle from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlayListPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";
import ReactPlayer from "react-player";
import { useProvider } from "../context/Provider";

function Footer() {
  const [{ songPlaying }] = useProvider();
  const [songUrl, setSongUrl] = useState();

  useEffect(() => {
    setSongUrl(songPlaying?.url);
  }, [songPlaying]);

  return (
    <div className="footer">
      <div className="footer__center">
        {songPlaying ? (
          <ReactPlayer
            width="100%"
            height="50px"
            controls={true}
            playing={true}
            className="playere"
            url={songUrl}
          />
        ) : (
         <p> Choose a song!</p>
        )}
      </div>
    </div>
  );
}

export default Footer;
