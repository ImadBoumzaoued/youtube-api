import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onSelect }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {videos.map(video => (
        <VideoListItem
          key={video.id.videoId}
          video={video}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default VideoList;
