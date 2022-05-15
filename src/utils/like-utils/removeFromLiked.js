import { actionTypes } from "../../reducers";
import { removeFromLikedService } from "../../services";

const { SET_LIKED } = actionTypes;

export const removeFromLiked = async (token, dataDispatch, videoId) => {
  try {
    const res = await removeFromLikedService(token, videoId);
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
