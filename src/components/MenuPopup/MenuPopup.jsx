import React from "react";
import "./MenuPopup.css";
import { MdOutlineAccessTime, MdOutlinePlaylistPlay } from "react-icons/md";
import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../../reducers";

const MenuPopup = ({ showPopup, setShowPopup, video }) => {
  const navigate = useNavigate();
  const { SET_PLAYLIST_INFO, REMOVE_PLAYLIST_INFO } = actionTypes;

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

  const playlistClickHandler = () => {
    if (!token) return navigate("/signin");
    console.log("click");
    setShowPopup(false);
    dataDispatch({
      type: SET_PLAYLIST_INFO,
      payload: { playlistDetails: video },
    });
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
    </div>
  );
};

export default MenuPopup;
