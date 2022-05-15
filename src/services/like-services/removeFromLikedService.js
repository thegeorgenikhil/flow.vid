import axios from "axios";

export const removeFromLikedService = async (encodedToken, videoId) => {
  return await axios.delete(`/api/user/likes/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
