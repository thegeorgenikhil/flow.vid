import { actionTypes } from "./actionTypes";

const { SET_VIDEOS, SET_WATCH_LATER } = actionTypes;

export const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return { ...state, videos: action.payload.videos };
    case SET_WATCH_LATER:
      return { ...state, watchLater: action.payload.watchLater };
    default:
      return state;
  }
};
