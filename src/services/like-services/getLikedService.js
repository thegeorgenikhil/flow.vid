import axios from "axios";

export const getLikedService = async (encodedToken) => {
  return await axios.get("/api/user/likes", {
    headers: {
      authorization: encodedToken,
    },
  });
};
