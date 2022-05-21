import axios from "axios";

export const clearHistoryService = async (encodedToken) => {
  return await axios.delete(`/api/user/history/all`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
