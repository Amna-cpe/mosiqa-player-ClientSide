import React, { useState  , useEffect} from "react";
import "./styles/index.css";
import SongRow from "./SongRow";
import { useProvider } from "../context/Provider";

function Mysongs() {
  const [{  songs, user }] = useProvider();
  const [Mysongs, setMysongs] = useState([]);

  useEffect(() => {
    setMysongs(songs.filter((s) => s.username === user.username));
  },[]);

  console.log(Mysongs);

  return (
    <div className="body__songs">   
      {Mysongs? Mysongs?.map((song) => (
        <SongRow
          songName={song.songName}
          username={song.username}
          likeCount={song.likeCount}
          songId={song.songId}
          url={song.songUrl}
        />
      )):
      <p>you havent added any songs yet</p>    
    }
    </div>
  );
}

export default Mysongs;
