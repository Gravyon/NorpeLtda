import React from "react";
import HeaderVideo from "./HeaderVideo";
import VideoArray from "./VideoArray";

const VideoSection = () => {
  return (
    <div>
      <HeaderVideo />
      <div className="bg-white">
        <VideoArray />
      </div>
    </div>
  );
};

export default VideoSection;
