import React from "react";

const Cause = () => {
  return (
    <section id="cause" className="bg-red flex h-screen w-full">
      <div className="flex-1 p-8">
        <h1 className="text-6xl font-bold mb-4">Let's run for compassion</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        {/* Add more static text as needed */}
      </div>
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

export default Cause;
