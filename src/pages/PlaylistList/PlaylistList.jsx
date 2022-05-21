import React from "react";
import { NoVideos, PlaylistCard } from "../../components";
import { useData } from "../../context";

export const PlaylistList = () => {
  const { dataState } = useData();

  return (
    <>
      {dataState.playlists.length === 0 && <NoVideos />}
      <main className="video-container">
        {dataState.playlists.map((playlist) => {
          return <PlaylistCard key={playlist._id} playlist={playlist} />;
        })}
      </main>
    </>
  );
};
