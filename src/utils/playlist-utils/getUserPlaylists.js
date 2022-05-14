import { actionTypes } from "../../reducers";
import { getPlaylistsService } from "../../services";

const { SET_PLAYLISTS } = actionTypes;

export const getUserPlaylists = async (token, dataDispatch) => {
  try {
    const res = await getPlaylistsService(token);
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
