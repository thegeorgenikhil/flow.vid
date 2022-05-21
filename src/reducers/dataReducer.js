import { actionTypes } from "./actionTypes";

const {
  SET_VIDEOS,
  SET_WATCH_LATER,
  SET_PLAYLIST_INFO,
  REMOVE_PLAYLIST_INFO,
  SET_PLAYLISTS,
  UPDATE_PLAYLIST_DETAILS,
  SET_HISTORY,
  SET_LIKED,
  SIGNOUT,
  SET_CATEGORY,
} = actionTypes;

export const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return { ...state, videos: action.payload.videos };
    case SET_WATCH_LATER:
      return { ...state, watchLater: action.payload.watchLater };
    case SET_PLAYLISTS:
      return { ...state, playlists: action.payload.playlists };
    case SET_PLAYLIST_INFO:
      return {
        ...state,
        createPlaylistInfo: {
          showCreatePlaylist: true,
          videoDetails: action.payload.videoDetails,
        },
      };
    case REMOVE_PLAYLIST_INFO:
      return {
        ...state,
        createPlaylistInfo: { showCreatePlaylist: false, playlistDetails: {} },
      };
    case UPDATE_PLAYLIST_DETAILS:
      const { updatedPlaylist } = action.payload;
      const { _id } = updatedPlaylist;
      const updatedPlaylists = state.playlists.map((playlist) => {
        if (playlist._id === _id) {
          return updatedPlaylist;
        }
        return playlist;
      });
      return { ...state, playlists: updatedPlaylists };
    case SET_HISTORY:
      return { ...state, history: action.payload.history };
    case SET_LIKED:
      return { ...state, liked: action.payload.likes };
    case SET_CATEGORY:
      return { ...state, category: action.payload.category };
    case SIGNOUT:
      return {
        ...state,
        watchLater: [],
        playlists: [],
        createPlaylistInfo: { showCreatePlaylist: false, videoDetails: {} },
        history: [],
        liked: [],
        category: "",
      };
    default:
      return state;
  }
};
