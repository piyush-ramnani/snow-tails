import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <section id="about" className="bg-red flex h-max w-full">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex-column py-4">
          <div className="p-10">
            <h1 className="text-5xl font-bold mb-1 text-white">A WOOF CALL</h1>
            <h1 className="text-5xl font-bold mb-1 text-bloodred">
              TO ALL YOU LOVELY
            </h1>
            <h1 className="text-5xl font-bold mb-1 text-bloodred">
              POOCH PARENTS
            </h1>
            <p className="text-l mt-5 font-bold mb-1 text-white">
              DO YOU KNOW DOGS REALLY, REALLY LOVE SNOW?
            </p>
            <p className="text-sm mt-5 mb-1 text-white">
              Just like how they enjoy playing in the mud and rolling on green
              grass, dogs adore snow. They're amazing at running and playing
              even in deep snow.
            </p>
            <p className="text-l mt-5 font-bold mb-1 text-white">
              Answer that woof call !!
            </p>
          </div>
          <div className="ml-10">
            <Button />
          </div>
        </div>
      </div>

      {/* Right side with an image */}
      <div className="flex-1 flex items-center p-2">
        <div className="m-10">
          <img
            src="/assets/about-race.png"
            alt="Dog race image"
            className="max-w-full max-h-full object-cover pl-3 pt-5"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
