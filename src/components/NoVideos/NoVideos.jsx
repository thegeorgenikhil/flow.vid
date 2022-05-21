import React from "react";
import QuestionMark from "../../assets/QuestionMark.png";

export const NoVideos = () => {
  return (
    <div className="no-videos-container">
      <img src={QuestionMark} className="no-videos-img" alt="" />
      <p className="no-videos-text" >No videos added yet</p>
    </div>
  );
};
