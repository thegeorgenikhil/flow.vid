import axios from "axios";

export const getPlaylistsService = async (encodedToken) => {
  return await axios.get("/api/user/playlists", {
    headers: {
      authorization: encodedToken,
    },
  });
};
