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
          <h1 className="text-8xl font-bold text-bloodred">FUR-TASTIC</h1>
          <h1 className="text-8xl font-bold text-bloodred">FROST RUN</h1>
          <p className="text-l mt-3 font-bold mb-2 text-white">
            WORLD'S FIRST EVER SNOW MARATHON FOR DOGS
          </p>
          <p className="text-sm mt-3 mb-2 text-white">
            <p>Get ready for more fun this fun and adventure this season.</p>
            <p>Calling all pet parents to grab your furry baby</p>
            <p>Because SNOW TAILS 2023 presents India's second snow race</p>
          </p>
          <p className="text-l mt-3 font-bold mb-2 text-white">
            JOIN US IN THIS COOL AND HEARTWARMING EVENT.
          </p>
        </div>
      </div>
      <div className="absolute bottom-12 right-10 mb-3">
        <Button />
      </div>
    </section>
  );
};

export default Home;
