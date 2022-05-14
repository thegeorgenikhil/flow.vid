import React from "react";
import "./PlaylistCard.css";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { deleteUserPlaylist } from "../../utils";
import { useAuth, useData } from "../../context";
import { Link } from "react-router-dom";

export const PlaylistCard = ({ playlist }) => {
  const { token } = useAuth();
  const { dataDispatch } = useData();

  const deletePlaylistHandler = async () => {
    await deleteUserPlaylist(token, dataDispatch, playlist._id);
  };

  return (
    <div className="video-card">
      <Link to={`/playlists/${playlist._id}`}>
        <div className="playlist-img-container">
          <img
            className="thumbnail-img"
            src={
              playlist.videos.length > 0
                ? `https://i.ytimg.com/vi/${playlist.videos[0]._id}/mqdefault.jpg`
                : "https://res.cloudinary.com/dgi9vljim/image/upload/v1652512754/samples/blank_playlist_m1tglm.png"
            }
            alt=""
          />
          <div className="playlist-img-overlay">
            <div className="playlist-img-overlay-content">
              <p>
                <BsFillPlayFill /> PLAY ALL
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="video-card-details">
        <div className="video-card-content">
          <p className="playlist-card-name">{playlist.title}</p>
          <p className="video-views">{playlist.videos.length} videos</p>
        </div>
        <AiFillDelete
          className="playlist-delete-btn"
          onClick={deletePlaylistHandler}
        />
      </div>
    </div>
  );
};
