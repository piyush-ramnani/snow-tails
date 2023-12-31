import React, { useState, useRef } from "react";
import Button from "./Button";

const Home = () => {
  // State to control video playback
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Reference to the video element
  const videoRef = useRef();

  // Function to toggle video play/pause
  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };
  {
    /* Absolute positioning used for the content, no flex box! */
  }
  return (
    <section id="home" className="bg-gray-500 relative h-screen w-full">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover filter brightness-75"
        src="/assets/sample1.mp4" // video source
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute top-1/4">
        <div className="p-10">
          <div className="w-[50%]">
            <h1 className="text-8xl font-bold text-bloodred">FUR-TASTIC</h1>
            <h1 className="text-8xl font-black text-bloodred">SNOW RACE</h1>
            <p className="text-l mt-3 tracking-wide font-bold mb-2 text-white">
              World's first ever snow race for dogs
            </p>
            <p className="text-sm mt-3 mb-2 text-white">
              <p>
                Get ready for a super fun Snow Race! Join our cool event where
                dogs and their friends have a blast running in the snow. Hear
                happy barks and see paw prints—it's a special celebration of
                friends and snowy trails!
              </p>
              {/* <p>Calling all pet parents to grab your furry baby</p>
            <p>Because SNOW TAILS 2023 presents India's second snow race</p> */}
            </p>
          </div>
          {/* <div className="flex items-center">
            <p className="text-l mt-3 font-bold mb-2 text-white">
              JOIN US IN THIS COOL AND HEARTWARMING EVENT.
            </p>
            <div className="">
              <Button />
            </div>
          </div> */}
        </div>
      </div>
      <div className="absolute top-3/4 w-[100%] p-10 flex items-center justify-between">
        <p className="text-l mt-3 text- font-bold mb-2 tracking-wide text-white">
          Join us in this cool and heartwarming event!!!
        </p>
        <div className="">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Home;
