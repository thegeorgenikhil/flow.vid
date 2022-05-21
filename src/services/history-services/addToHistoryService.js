import axios from "axios";

export const addToHistoryService = async (encodedToken, video) => {
  return await axios.post(
    `/api/user/history`,
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
