import { actionTypes } from "../../reducers";
import { createPlaylistService } from "../../services";

const { SET_PLAYLISTS } = actionTypes;

export const createUserPlaylist = async (
  token,
  dataDispatch,
  playlistTitle
) => {
  try {
    const res = await createPlaylistService(token, playlistTitle);
    const data = await res.data;
    if (data.playlists) {
      dataDispatch({
        type: SET_PLAYLISTS,
        payload: { playlists: data.playlists },
      });
    }
  } catch (error) {
    console.error(error);
  }
};
