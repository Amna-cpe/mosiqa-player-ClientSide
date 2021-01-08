import React, { useEffect } from "react";
import SongRow from "./SongRow";
import CircularProgress from "@material-ui/core/CircularProgress";

import { getSongs } from "../context/actions";
import { useProvider } from "../context/Provider";

function HomePage() {
  const [{ songs, user, loading }, dispatch] = useProvider();

  useEffect(() => {
    getSongs(dispatch);
  }, [user.likes && user.likes]);

  return (
    <>
      <div className="body__info">
        <img
          src={
            "http://4everstatic.com/pictures/850xX/people/musicians/michael-jackson,-singer-175253.jpg"
          }
          alt=""
        />
        <div className="body__infoText">
          <strong>MOSIQA</strong>
          <h2>Enjoy and Share</h2>
          <p>
            Share your favourites music with firends <br /> on earth or beyond
          </p>
        </div>
      </div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="body__songs">
          {songs?.map((song) => (
            <SongRow
              songName={song.songName}
              username={song.username}
              likeCount={song.likeCount}
              songId={song.songId}
              url={song.songUrl}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default HomePage;
