import axios from "axios";

export const deleteFromHistoryService = async (encodedToken, videoId) => {
  return await axios.delete(`/api/user/history/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
