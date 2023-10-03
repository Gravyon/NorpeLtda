import React from "react";
import HeaderVideo from "./HeaderVideo";
import VideoArray from "./VideoArray";

const VideoSection = () => {
  return (
    <div>
      <HeaderVideo />
      <div className="bg-gray-200">
        <VideoArray />
      </div>
    </div>
  );
};

export default VideoSection;
