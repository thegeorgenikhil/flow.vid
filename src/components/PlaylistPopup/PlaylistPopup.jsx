import { useState } from "react";
import "./PlaylistPopup.css";
import { MdOutlineAdd } from "react-icons/md";
import { actionTypes } from "../../reducers";
import { useData } from "../../context";

const PlaylistPopup = () => {
  const [showInput, setShowInput] = useState(false);
  const { dataDispatch, dataState } = useData();
  const { createPlaylistInfo } = dataState;
  console.log(createPlaylistInfo);
  const { showCreatePlaylist } = createPlaylistInfo;
  const { REMOVE_PLAYLIST_INFO } = actionTypes;

  const closePlaylistPopupHandler = () => {
    setShowInput(false);
    dataDispatch({ type: REMOVE_PLAYLIST_INFO });
  };

  {
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
            <div className="playlist-group">
              <div className="playlist-checkbox-container">
                <input
                  type="checkbox"
                  name="playlist-checkbox"
                  id="playlist-checkbox"
                />
                <label htmlFor="">Computer Science</label>
              </div>
              <div className="playlist-checkbox-container">
                <input
                  type="checkbox"
                  name="playlist-checkbox"
                  id="playlist-checkbox"
                />
                <label htmlFor="">Computer Science</label>
              </div>
            </div>
            <div className="divider-sm"></div>
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
                />
                <div className="create-playlist-btn">CREATE</div>
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
  }
};

export default PlaylistPopup;
