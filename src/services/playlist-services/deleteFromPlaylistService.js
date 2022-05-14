import axios from "axios";

export const deleteFromPlaylistService = async (
  encodedToken,
  playlistId,
  videoId
) => {
  return await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
