import React from "react";
import { videos } from "../../data/videos";
const VideoArray = () => {
  return (
    <div className="p-12 px-10">
      {videos.map((item) => (
        <div className="flex flex-col md:grid md:grid-cols-2 bg-white my-10">
          <iframe
            className="w-full h-96 aspect-video"
            src={item.source}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="mx-10 my-3 flex flex-col">
            <p className="pt-2 text-xl font-bold">{item.title.toUpperCase()}</p>
            <p className="mt-5 text-justify">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoArray;
