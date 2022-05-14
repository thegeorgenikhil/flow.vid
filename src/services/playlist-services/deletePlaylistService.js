import axios from "axios";

export const deletePlaylistService = async (encodedToken, playlistId) => {
  return await axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
