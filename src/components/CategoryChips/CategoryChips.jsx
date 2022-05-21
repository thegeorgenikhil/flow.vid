import React from "react";
import { useData } from "../../context";
import { actionTypes } from "../../reducers";

export const CategoryChips = () => {
  const { dataState, dataDispatch } = useData();
  const { category, videos } = dataState;
  const { SET_CATEGORY } = actionTypes;
  const categories = videos.reduce((categoriesArr, video) => {
    if (!categoriesArr.includes(video.category)) {
      categoriesArr.push(video.category);
    }
    return categoriesArr;
  }, []);

  const categoryHandler = (category) => {
    if (!category) return;
    dataDispatch({ type: SET_CATEGORY, payload: { category } });
  };
  return (
    <div className="chip-container">
      {categories.length > 0 &&
        ["All", ...categories]?.map((currCategory, index) => {
          return (
            <div
              onClick={() => categoryHandler(currCategory)}
              className={
                category.toLowerCase() === currCategory.toLowerCase()
                  ? "chip chip-active"
                  : "chip"
              }
              key={index}
            >
              <p>{currCategory}</p>
            </div>
          );
        })}
    </div>
  );
};
