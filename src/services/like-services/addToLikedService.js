import axios from "axios";

export const addToLikedService = async (encodedToken, video) => {
  return await axios.post(
    `/api/user/likes`,
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
