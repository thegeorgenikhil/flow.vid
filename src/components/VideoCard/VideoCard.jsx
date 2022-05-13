import React, { useState } from "react";
import "./VideoCard.css";
import { MdMoreVert } from "react-icons/md";
import { trimVideoTitle } from "../../utils";
import MenuPopup from "../MenuPopup/MenuPopup";

const VideoCard = ({ video }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { _id, title, channelName, channelImgUrl, views } = video;
  return (
    <div className="video-card">
      <img
        className="thumbnail-img"
        src={`https://i.ytimg.com/vi/${_id}/mqdefault.jpg`}
        alt=""
      />
      <div className="video-card-details">
        <img className="channel-img" src={channelImgUrl} alt="" />
        <div className="video-card-content">
          <p className="video-card-name">{trimVideoTitle(title)}</p>
          <p className="channel-name">{channelName}</p>
          <p className="video-views">{views} views</p>
        </div>
        <MdMoreVert
          className="more-option-btn"
          onClick={() => setShowPopup((prev) => !prev)}
        />
        <MenuPopup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          video={video}
        />
      </div>
    </div>
  );
};

export default VideoCard;
