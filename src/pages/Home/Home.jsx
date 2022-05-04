import React from "react";
import { Sidebar, VideoCard } from "../../components";
import { useData } from "../../context";

const Home = () => {
  const { dataState } = useData();
  return (
    <main className="video-container">
      {dataState.videos &&
        dataState.videos.map((video) => {
          return <VideoCard video={video} key={video._id} />;
        })}
    </main>
  );
};

export default Home;
