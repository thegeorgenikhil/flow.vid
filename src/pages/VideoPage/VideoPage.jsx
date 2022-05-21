import React, { useState, useEffect } from "react";
import { PlaylistPopup } from "../../components";
import { useAuth, useData } from "../../context";
import ReactPlayer from "react-player";
import { useParams, useNavigate } from "react-router-dom";
import "./VideoPage.css";
import {
  MdThumbUp,
  MdOutlineAccessTime,
  MdOutlinePlaylistPlay,
  MdThumbUpOffAlt,
} from "react-icons/md";
import { addToHistory, addToLiked, removeFromLiked } from "../../utils";
import { actionTypes } from "../../reducers";

const { SET_PLAYLIST_INFO } = actionTypes;

export const VideoPage = () => {
  const { videoId } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();
  const { dataState, dataDispatch, addToWatchLater } = useData();
  const [videoInfo, setVideoInfo] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const playlistClickHandler = () => {
    if (!token) return navigate("/signin");
    if (videoInfo) {
      dataDispatch({
        type: SET_PLAYLIST_INFO,
        payload: { videoDetails: videoInfo },
      });
    }
  };

  const likeClickHandler = () => {
    if (!token) return navigate("/signin");
    if (isLiked) {
      removeFromLiked(token, dataDispatch, videoId);
      setIsLiked(false);
    } else {
      addToLiked(token, dataDispatch, videoInfo);
      setIsLiked(true);
    }
  };

  const videoHistoryHandler = () => {
    if (token) addToHistory(token, dataDispatch, videoInfo);
  };

  useEffect(() => {
    if (!videoInfo) {
      const video = dataState.videos.find((video) => video._id === videoId);
      if (video) {
        setVideoInfo(video);
        setIsLiked(dataState.liked.some((video) => video._id === videoId));
      }
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <PlaylistPopup />
      <div className="flex flex-col w-full">
        <div className="single-video-container">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            className="react-player"
            controls
            width="100%"
            height="100%"
            onStart={videoHistoryHandler}
          />
        </div>
        {videoInfo && (
          <div className="video-info-container">
            <p className="video-info-title">{videoInfo?.title}</p>
            <p className="video-info-views">{videoInfo?.views} views</p>
            <div className="flex gap-4 text-md">
              {isLiked ? (
                <p
                  className="video-page-actions is-liked"
                  onClick={() => likeClickHandler()}
                >
                  <MdThumbUp />
                  Like
                </p>
              ) : (
                <p
                  className="video-page-actions"
                  onClick={() => likeClickHandler()}
                >
                  <MdThumbUpOffAlt />
                  Like
                </p>
              )}
              <p
                className="video-page-actions"
                onClick={() => addToWatchLater(videoInfo, token)}
              >
                <MdOutlineAccessTime />
                Watch Later
              </p>
              <p
                className="video-page-actions"
                onClick={() => playlistClickHandler()}
              >
                <MdOutlinePlaylistPlay />
                Add To Playlist
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="channel-img"
                src={videoInfo?.channelImgUrl}
                alt={videoInfo?.channelName}
              />
              <p className="video-info-channel-name">
                {videoInfo?.channelName}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
