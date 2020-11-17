import React, { Component } from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnail.medium.url} />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
