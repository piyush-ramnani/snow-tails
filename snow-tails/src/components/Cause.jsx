import React from "react";

const Cause = () => {
  return (
    <section id="cause" className="bg-red flex h-screen w-full">
      <div className="flex-1 p-8">
        <h2 className="text-6xl font-bold mb-2 text-bloodred">LET'S RUN FOR</h2>
        <h2 className="text-6xl font-bold mb-2 text-white">COMPASSION</h2>
        <p className="text-l mt-5 font-bold mb-2 text-white">
          LET'S ALL BELIEVE IN PROTECTING, PRESERVING AND NURTURING LIVES.
        </p>
        <p className="text-sm mt-5 mb-2 text-white">
          Animals in India and around the world need our help! Wild animals are
          disappearing, and street animals are suffering. SnowTails cares about
          animals in the Himalayas.
        </p>
        <p className="text-sm mt-5 mb-2 text-white">
          Manali Strays, a group in Himachal Pradesh, rescues and helps stray
          animals. They give them urgent needed attention, medical care and
          post-treatment care.
        </p>
        <p className="text-l mt-5 font-bold mb-2 text-white">
          JOIN US IN MAKING A DIFFERENCE FOR ANIMALS IN NEED.
        </p>
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
