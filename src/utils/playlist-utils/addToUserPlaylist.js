import { actionTypes } from "../../reducers";
import { addToPlaylistService } from "../../services";

const { UPDATE_PLAYLIST_DETAILS } = actionTypes;

export const addToUserPlaylist = async (
  token,
  dataDispatch,
  playlistId,
  video
) => {
  try {
    const res = await addToPlaylistService(token, playlistId, video);
    const data = await res.data;
    if (data.playlist) {
      dataDispatch({
        type: UPDATE_PLAYLIST_DETAILS,
        payload: { updatedPlaylist: data.playlist },
      });
    }
  } catch (error) {
    console.error(error);
  }
};
