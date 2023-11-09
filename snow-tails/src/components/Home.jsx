import React, { useState, useRef } from "react";

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

  return (
    <section id="home" className="bg-gray-500 relative h-screen w-full">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover filter brightness-75"
        src="../assets/sample1.mp4" // Replace with your video source
      ></video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl">
        <h1>Welcome to My Website</h1>
        <button
          onClick={toggleVideoPlayback}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isVideoPlaying ? "Pause Video" : "Play Video"}
        </button>
      </div>
    </section>
  );
};

export default Home;
