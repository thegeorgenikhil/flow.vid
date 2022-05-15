import { actionTypes } from "../../reducers";
import { addToHistoryService } from "../../services";

const { SET_HISTORY } = actionTypes;

export const addToHistory = async (token, dataDispatch, video) => {
  try {
    const res = await addToHistoryService(token, video);
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
