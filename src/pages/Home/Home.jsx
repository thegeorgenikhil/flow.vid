import React from "react";
import { VideoCard, PlaylistPopup, CategoryChips } from "../../components";
import { useData } from "../../context";

export const Home = () => {
  const { dataState } = useData();
  const { category, videos } = dataState;
  const filteredVideos = videos.filter((video) => {
    if (!category || category === "All") return video;
    return video.category === category;
  });

  return (
    <>
      <div className="flex flex-col">
        <PlaylistPopup />
        <CategoryChips />
        <main className="video-container">
          <div className="flex flex-wrap justify-center gap-2">
            {filteredVideos &&
              filteredVideos.map((video) => {
                return <VideoCard video={video} key={video._id} />;
              })}
          </div>
        </main>
      </div>
    </>
  );
};
