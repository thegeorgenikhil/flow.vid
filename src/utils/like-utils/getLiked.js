import { actionTypes } from "../../reducers";
import { getLikedService } from "../../services";

const { SET_LIKED } = actionTypes;

export const getLiked = async (token, dataDispatch) => {
  try {
    const res = await getLikedService(token);
    const data = await res.data;
    if (data.likes) {
      dataDispatch({
        type: SET_LIKED,
        payload: { likes: data.likes },
      });
    }
  } catch (error) {
    console.error(error);
  }
};
