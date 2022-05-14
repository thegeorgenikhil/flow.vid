import { actionTypes } from "../../reducers";
import { deletePlaylistService } from "../../services";

const { SET_PLAYLISTS } = actionTypes;

export const deleteUserPlaylist = async (token, dataDispatch, playlistId) => {
  try {
    const res = await deletePlaylistService(token, playlistId);
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
