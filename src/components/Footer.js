import React, { useEffect, useState } from "react";
import "./styles/index.css";
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
