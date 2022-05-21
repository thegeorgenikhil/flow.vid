import { actionTypes } from "../../reducers";
import { addToLikedService } from "../../services";

const { SET_LIKED } = actionTypes;

export const addToLiked = async (token, dataDispatch, video) => {
  try {
    const res = await addToLikedService(token, video);
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
