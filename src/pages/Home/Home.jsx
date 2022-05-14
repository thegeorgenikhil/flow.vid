import React from "react";
import { VideoCard, PlaylistPopup } from "../../components";
import { useData } from "../../context";

export const Home = () => {
  const { dataState } = useData();
  return (
    <>
      <PlaylistPopup />
      <main className="video-container">
        {dataState.videos &&
          dataState.videos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
      </main>
    </>
  );
};

