import axios from "axios";

export const createPlaylistService = async (encodedToken, playlistTitle) => {
  return await axios.post(
    "/api/user/playlists",
    { playlist: { title: playlistTitle } },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
