import React from "react";
import { PlaylistCard } from "../../components";
import { useData } from "../../context";

export const PlaylistList = () => {
  const { dataState } = useData();

  return (
    <>
      <main className="video-container">
        {dataState.playlists.map((playlist) => {
          return <PlaylistCard key={playlist._id} playlist={playlist} />;
        })}
      </main>
    </>
  );
};

