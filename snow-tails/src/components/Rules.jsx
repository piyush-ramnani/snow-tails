import React from "react";

const Rules = () => {
  return (
    <section id="rules" className="bg-red flex h-screen w-full">
      {/* Left section with GIF/SVG */}
      <div className="flex-1 flex items-center justify-center">
        {/* Add your GIF or SVG here */}
        {/* For example, using an image */}
        <img
          src="/path/to/your/gif-or-svg.gif"
          alt="Rules Gif/SVG"
          className="max-w-full max-h-full object-cover"
        />
      </div>

      {/* Right section with heading and bullet points */}
      <div className="flex-1 p-8">
        <h2 className="text-5xl font-bold mb-4">Rules</h2>
        <ul className="list-disc">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </li>
          {/* Add more bullet points as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Rules;
