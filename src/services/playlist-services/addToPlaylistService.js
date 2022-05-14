import axios from "axios";

export const addToPlaylistService = async (encodedToken, playlistId, video) => {
  return await axios.post(
    `/api/user/playlists/${playlistId}`,
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
