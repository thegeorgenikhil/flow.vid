import axios from "axios";

export const getHistoryService = async (encodedToken) => {
  return await axios.get(`/api/user/history`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
