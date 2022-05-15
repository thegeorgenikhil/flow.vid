import { useState, useEffect } from "react";
import { VideoCard, PlaylistPopup, Loader } from "../../components";
import { useAuth, useData } from "../../context";
import { clearHistory, getHistory } from "../../utils";

export const History = () => {
  const { token } = useAuth();
  const { dataState, dataDispatch } = useData();
  const [isLoading, setIsLoading] = useState(false);

  const clearHistoryHandler = async () => {
    setIsLoading(true);
    await clearHistory(token, dataDispatch);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!dataState.history.length) {
      getHistory(token, dataDispatch);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <PlaylistPopup />
      <div>
        <button className="btn clear-history-btn" onClick={clearHistoryHandler}>
          {isLoading ? <Loader /> : "CLEAR HISTORY"}
        </button>
        <main className="video-container">
          {dataState.history &&
            [...dataState.history].reverse().map((video) => {
              return <VideoCard video={video} key={video._id} history={true} />;
            })}
        </main>
      </div>
    </>
  );
};
