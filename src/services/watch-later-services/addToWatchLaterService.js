import axios from "axios";

export const addToWatchLaterService = async (video, encodedToken) => {
  return await axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
