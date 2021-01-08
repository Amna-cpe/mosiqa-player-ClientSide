import React from "react";
import "./styles/index.css";
import SongRow from "./SongRow";
import { useProvider } from "../context/Provider";

function SearchView() {
  const [{ loading, results, errors }] = useProvider();

  return (
    <div className="body__songs">
      {
        (!loading)&&(<p style={{margin:"60px"}}> SEARCH A SONG</p>)
      }
    
      {loading
        ? "loading..."
        : results?.map((song) => (
            <SongRow
              songName={song.songName}
              username={song.username}
              likeCount={song.likeCount}
              songId={song.songId}
              url={song.songUrl}
            />
          ))}
    </div>
  );
}

export default SearchView;
