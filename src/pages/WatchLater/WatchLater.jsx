import React, { useEffect } from "react";
import { VideoCard } from "../../components";
import { useAuth, useData } from "../../context";

const WatchLater = () => {
  const { dataState, getWatchLater } = useData();
  const { token } = useAuth();
  useEffect(() => {
    getWatchLater(token);
  }, [getWatchLater, token]);
  return (
    <main className="video-container">
      {dataState.watchLater &&
        dataState.watchLater.map((video) => {
          return <VideoCard video={video} key={video._id} />;
        })}
    </main>
  );
};

export default WatchLater;
