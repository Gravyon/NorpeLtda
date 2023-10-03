import React from "react";

const HeaderVideo = () => {
  return (
    <div className="m-12 px-10">
      <iframe
        className="flex justify-center  md:h-screen w-full aspect-video"
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
          obcaecati dolorum dignissimos vel sapiente adipisci odio? Aspernatur,
          blanditiis quos!
        </p>
      </div>
    </div>
  );
};

export default HeaderVideo;
