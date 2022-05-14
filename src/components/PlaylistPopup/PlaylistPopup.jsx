import { useState } from "react";
import "./PlaylistPopup.css";
import { MdOutlineAdd } from "react-icons/md";
import { actionTypes } from "../../reducers";
import { useAuth, useData } from "../../context";
import {
  addToUserPlaylist,
  createUserPlaylist,
  deleteFromUserPlaylist,
} from "../../utils";

export const PlaylistPopup = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { dataDispatch, dataState } = useData();
  const { token } = useAuth();
  const { createPlaylistInfo, playlists } = dataState;
  const { showCreatePlaylist, videoDetails } = createPlaylistInfo;
  const { REMOVE_PLAYLIST_INFO } = actionTypes;

  const closePlaylistPopupHandler = () => {
    setShowInput(false);
    dataDispatch({ type: REMOVE_PLAYLIST_INFO });
  };

  const playlistNameInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const createPlaylistHandler = async () => {
    if (inputValue.trim() !== "") {
      setShowInput(false);
      createUserPlaylist(token, dataDispatch, inputValue);
      setInputValue("");
    }
  };

  const addToPlaylistHandler = async (e, playlistId) => {
    if (e.target.checked) {
      await addToUserPlaylist(token, dataDispatch, playlistId, videoDetails);
    } else {
      await deleteFromUserPlaylist(
        token,
        dataDispatch,
        playlistId,
        videoDetails._id
      );
    }
  };

  return (
    showCreatePlaylist && (
      <div className="playlist-popup-container">
        <div
          className="playlist-popup-overlay"
          onClick={closePlaylistPopupHandler}
        ></div>
        <div className="playlist-popup">
          <p className="text-semibold">Save to Playlist</p>
          <div className="divider-sm"></div>
          {playlists.length > 0 && (
            <div>
              <div className="playlist-group">
                {playlists &&
                  playlists.map((playlist) => {
                    return (
                      <div
                        className="playlist-checkbox-container"
                        key={playlist._id}
                      >
                        <input
                          type="checkbox"
                          name="playlist-checkbox"
                          id="playlist-checkbox"
                          checked={playlist.videos.some(
                            (video) => video._id === videoDetails._id
                          )}
                          onChange={(e) =>
                            addToPlaylistHandler(e, playlist._id)
                          }
                        />
                        <label htmlFor="">{playlist.title}</label>
                      </div>
                    );
                  })}
              </div>
              <div className="divider-sm"></div>
            </div>
          )}
          {showInput ? (
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-semibold">
                Name
              </label>
              <input
                type="text"
                name=""
                id="name"
                className="playlist-name-input"
                placeholder="Enter playlist name"
                value={inputValue}
                onChange={playlistNameInputHandler}
              />
              <div
                className="create-playlist-btn"
                onClick={createPlaylistHandler}
              >
                CREATE
              </div>
            </div>
          ) : (
            <div
              className="flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => setShowInput((prev) => !prev)}
            >
              <MdOutlineAdd />
              <p>Create a new playlist</p>
            </div>
          )}
        </div>
      </div>
    )
  );
};

