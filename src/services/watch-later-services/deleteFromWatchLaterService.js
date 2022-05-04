import axios from "axios";

export const deleteFromWatchLaterService = async (videoId, encodedToken) => {
  return await axios.delete(`/api/user/watchlater/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
