import { actionTypes } from "../../reducers";
import { deleteFromHistoryService } from "../../services";

const { SET_HISTORY } = actionTypes;

export const deleteFromHistory = async (token, dataDispatch, videoId) => {
  try {
    const res = await deleteFromHistoryService(token, videoId);
    const data = await res.data;
    if (data.history) {
      dataDispatch({
        type: SET_HISTORY,
        payload: { history: data.history },
      });
    }
  } catch (error) {
    console.error(error);
  }
};
