import { createContext, useContext, useEffect, useReducer } from "react";
import { actionTypes, dataReducer } from "../reducers";
import {
  addToWatchLaterService,
  deleteFromWatchLaterService,
  getAllVideosService,
  getWatchLaterService,
} from "../services";
import { getHistory, getLiked, getUserPlaylists } from "../utils";
import { useAuth } from "./auth-context";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { SET_VIDEOS, SET_WATCH_LATER } = actionTypes;
  const { token } = useAuth();
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    videos: [],
    watchLater: [],
    playlists: [],
    createPlaylistInfo: { showCreatePlaylist: false, videoDetails: {} },
    history: [],
    liked: [],
    category: "",
  });

  const getWatchLater = async (token) => {
    try {
      const res = await getWatchLaterService(token);
      const data = await res.data;
      if (data.watchlater) {
        dataDispatch({
          type: SET_WATCH_LATER,
          payload: { watchLater: data.watchlater },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addToWatchLater = async (video, token) => {
    try {
      const res = await addToWatchLaterService(video, token);
      const data = await res.data;
      if (data.watchlater) {
        dataDispatch({
          type: SET_WATCH_LATER,
          payload: { watchLater: data.watchlater },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFromWatchLater = async (videoId, token) => {
    try {
      const res = await deleteFromWatchLaterService(videoId, token);
      const data = await res.data;
      if (data.watchlater) {
        dataDispatch({
          type: SET_WATCH_LATER,
          payload: { watchLater: data.watchlater },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const res = await getAllVideosService();
        const data = await res.data;
        if (data.videos) {
          dataDispatch({ type: SET_VIDEOS, payload: { videos: data.videos } });
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAllVideos();
    if (token) {
      getUserPlaylists(token, dataDispatch);
      getWatchLater(token);
      getHistory(token, dataDispatch);
      getLiked(token, dataDispatch);
    }
    // eslint-disable-next-line
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        dataState,
        dataDispatch,
        getWatchLater,
        addToWatchLater,
        deleteFromWatchLater,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
