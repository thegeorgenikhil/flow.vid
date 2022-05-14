import { actionTypes } from "../../reducers";
import { deleteFromPlaylistService } from "../../services";

const { UPDATE_PLAYLIST_DETAILS } = actionTypes;

export const deleteFromUserPlaylist = async (
  token,
  dataDispatch,
  playlistId,
  videoId
) => {
  try {
    const res = await deleteFromPlaylistService(token, playlistId, videoId);
    const data = await res.data;
    console.log(data);
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
