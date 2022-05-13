import { actionTypes } from "./actionTypes";

const { SET_VIDEOS, SET_WATCH_LATER, SET_PLAYLIST_INFO, REMOVE_PLAYLIST_INFO } =
  actionTypes;

export const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return { ...state, videos: action.payload.videos };
    case SET_WATCH_LATER:
      return { ...state, watchLater: action.payload.watchLater };
    case SET_PLAYLIST_INFO:
      return {
        ...state,
        createPlaylistInfo: {
          showCreatePlaylist: true,
          playlistDetails: action.payload.playlistDetails,
        },
      };
    case REMOVE_PLAYLIST_INFO:
      return {
        ...state,
        createPlaylistInfo: { showCreatePlaylist: false, playlistDetails: {} },
      };
    default:
      return state;
  }
};
