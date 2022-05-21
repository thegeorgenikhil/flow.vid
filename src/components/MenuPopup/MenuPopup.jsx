import React from "react";
import "./MenuPopup.css";
import {
  MdOutlineAccessTime,
  MdOutlinePlaylistPlay,
  MdThumbUp,
} from "react-icons/md";
import { useData, useAuth } from "../../context";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../../reducers";
import {
  deleteFromUserPlaylist,
  deleteFromHistory,
  removeFromLiked,
} from "../../utils";

const MenuPopup = ({
  showPopup,
  setShowPopup,
  video,
  playlistId,
  history = false,
  isLiked = false,
}) => {
  const navigate = useNavigate();
  const { SET_PLAYLIST_INFO } = actionTypes;

  const { addToWatchLater, dataState, dataDispatch, deleteFromWatchLater } =
    useData();
  const { token } = useAuth();

  const watchLaterHandler = () => {
    if (!token) return navigate("/signin");
    setShowPopup(false);
    addToWatchLater(video, token);
  };

  const removeWatchLaterHandler = () => {
    if (!token) return navigate("/signin");
    setShowPopup(false);
    deleteFromWatchLater(video._id, token);
  };

  const deleteFromHistoryHandler = () => {
    if (!token) return navigate("/signin");
    setShowPopup(false);
    deleteFromHistory(token, dataDispatch, video._id);
  };

  const removeFromLikedHandler = () => {
    if (!token) return navigate("/signin");
    setShowPopup(false);
    removeFromLiked(token, dataDispatch, video._id);
  };

  const playlistClickHandler = () => {
    if (!token) return navigate("/signin");
    setShowPopup(false);
    dataDispatch({
      type: SET_PLAYLIST_INFO,
      payload: { videoDetails: video },
    });
  };

  const deleteFromPlaylistHandler = async () => {
    await deleteFromUserPlaylist(token, dataDispatch, playlistId, video._id);
  };

  return (
    <div className={showPopup ? "menu-popup show" : "menu-popup"}>
      <div className="popup-item" onClick={playlistClickHandler}>
        <MdOutlinePlaylistPlay className="popup-item-icon" />
        <p>Add to Playlist</p>
      </div>
      {dataState.watchLater.find(({ _id }) => video._id === _id) ? (
        <div className="popup-item" onClick={removeWatchLaterHandler}>
          <MdOutlineAccessTime className="popup-item-icon" />
          <p>Remove from Watch Later</p>
        </div>
      ) : (
        <div className="popup-item" onClick={watchLaterHandler}>
          <MdOutlineAccessTime className="popup-item-icon" />
          <p>Watch Later</p>
        </div>
      )}
      {playlistId && (
        <div className="popup-item" onClick={deleteFromPlaylistHandler}>
          <MdOutlinePlaylistPlay className="popup-item-icon" />
          <p>Remove from Playlist</p>
        </div>
      )}
      {history && (
        <div className="popup-item" onClick={deleteFromHistoryHandler}>
          <MdOutlinePlaylistPlay className="popup-item-icon" />
          <p>Delete from History</p>
        </div>
      )}
      {isLiked && (
        <div className="popup-item" onClick={removeFromLikedHandler}>
          <MdThumbUp className="popup-item-icon" />
          <p>Remove from Liked</p>
        </div>
      )}
    </div>
  );
};

export default MenuPopup;
