import React from "react";

const VideoSection = () => {
  return (
    <div>
      <div className="m-12 px-10">
        <iframe
          className="flex justify-center w-full aspect-video"
          height="500"
          src="https://www.youtube.com/embed/SYxN134gb-8?si=0MCuxI89-_Dp01KT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="mt-5">
          <p className="text-xl font-bold">TITULO</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            tenetur eos qui aut neque delectus esse! Optio itaque ex, eaque
            obcaecati dolorum dignissimos vel sapiente adipisci odio?
            Aspernatur, blanditiis quos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
