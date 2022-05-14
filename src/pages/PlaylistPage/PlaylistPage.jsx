import React from "react";
import { useParams } from "react-router-dom";
import { PlaylistPopup, VideoCard } from "../../components";
import { useData } from "../../context";

export const PlaylistPage = () => {
  const { playlistId } = useParams();
  const { dataState } = useData();
  return (
    <>
      <PlaylistPopup />
      <main className="video-container">
        {dataState.playlists
          .find((playlist) => playlist._id === playlistId)
          .videos.map((video) => {
            return <VideoCard key={video._id} video={video} playlistId={playlistId} />;
          })}
      </main>
    </>
  );
};
