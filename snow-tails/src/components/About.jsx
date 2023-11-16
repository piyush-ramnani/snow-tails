import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-red flex h-screen w-full">
      <div className="flex-1 p-8">
        <h2 className="text-6xl font-bold mb-2 text-white">A WOOF CALL</h2>
        <h2 className="text-6xl font-bold mb-2 text-bloodred">
          TO ALL YOU LOVELY
        </h2>
        <h2 className="text-6xl font-bold mb-2 text-bloodred">POOCH PARENTS</h2>
        <p className="text-l mt-5 font-bold mb-2 text-white">
          DO YOU KNOW DOGS REALLY, REALLY LOVE SNOW?
        </p>
        <p className="text-sm mt-5 mb-2 text-white">
          Just like how they enjoy playing in the mud and rolling on green
          grass, dogs adore snow. They're amazing at running and playing even in
          deep snow.
        </p>
        <p className="text-l mt-5 font-bold mb-2 text-white">
          IT'S LIKE THEY'VE FOUND A WHOLE NEW WORLD OF FUN !!
        </p>
      </div>

      {/* Right side with an image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/path/to/your/image.jpg"
          alt="Race Image"
          className="max-w-full max-h-full object-cover"
        />
      </div>
    </section>
  );
};

export default About;
