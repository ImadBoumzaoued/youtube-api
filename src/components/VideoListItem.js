import React from "react";

const VideoListItem = ({ video, onSelect }) => {
  const thumb = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li>
      <p>{title}</p>
      <img
        className="img-responsive"
        src={thumb}
        alt=""
        onClick={() => onSelect(video)}
      />
    </li>
  );
};

export default VideoListItem;
