import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>Select a video...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      <h4 className="text-primary">{video.snippet.title}</h4>
      <div className="video-responsive video-responsive-4-3">
        <iframe
          title="video"
          src={url}
          width="100%"
          height="350"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
