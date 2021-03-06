import React from "react";
import { VideoCard, PlaylistPopup, NoVideos } from "../../components";
import { useData } from "../../context";

export const Like = () => {
  const { dataState } = useData();
  return (
    <>
      <PlaylistPopup />
      {dataState.liked.length === 0 && <NoVideos />}
      <main className="video-container">
        {dataState.liked &&
          dataState.liked.map((video) => {
            return <VideoCard video={video} key={video._id} isLiked={true} />;
          })}
      </main>
    </>
  );
};
