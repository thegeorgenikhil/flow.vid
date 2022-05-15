import { actionTypes } from "../../reducers";
import { clearHistoryService } from "../../services";

const { SET_HISTORY } = actionTypes;

export const clearHistory = async (token, dataDispatch) => {
  try {
    const res = await clearHistoryService(token);
    const data = await res.data;
    if (data.history) {
      dataDispatch({
        type: SET_HISTORY,
        payload: { history: [] },
      });
    }
  } catch (error) {
    console.error(error);
  }
};
