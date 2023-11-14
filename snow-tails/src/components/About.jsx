import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-red flex h-screen w-full">
      <div className="flex-1 p-8">
        <h2 className="text-8xl font-bold mb-4">
          A woof call to all you lovely pooch parents
        </h2>
        <p>
          DO you know dogs really, really love snow? Just like how they enjoy
          playing in the mud and rolling on green grass, dogs adore snow.
          They're amazing at running and playing even in deep snow. It's like
          they've found a whole new world of fun!
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
