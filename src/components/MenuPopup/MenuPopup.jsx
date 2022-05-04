import React, { useState } from "react";
import "./MenuPopup.css";
import { MdOutlineAccessTime, MdOutlinePlaylistPlay } from "react-icons/md";
import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";

const MenuPopup = ({ showPopup, setShowPopup, video }) => {
  const { addToWatchLater, dataState, deleteFromWatchLater } = useData();
  const { token } = useAuth();
  const watchLaterHandler = () => {
    setShowPopup(false);
    addToWatchLater(video, token);
  };

  const removeWatchLaterHandler = () => {
    setShowPopup(false);
    deleteFromWatchLater(video._id, token);
  };

  return (
    <div className={showPopup ? "menu-popup show" : "menu-popup"}>
      <div className="popup-item">
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
