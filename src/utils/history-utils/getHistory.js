import { actionTypes } from "../../reducers";
import { getHistoryService } from "../../services";

const { SET_HISTORY } = actionTypes;

export const getHistory = async (token, dataDispatch) => {
  try {
    const res = await getHistoryService(token);
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
