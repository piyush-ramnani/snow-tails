import React from "react";

const Cause = () => {
  return (
    <section
      id="cause"
      className="bg-red flex h-max w-full border border-white"
    >
      <div className="flex-1 border border-yellow-400">
        <div className="flex-col justify-between px-10 py-20">
          <h2 className="text-5xl font-bold mb-2 text-bloodred">
            LET'S RUN FOR
          </h2>
          <h2 className="text-5xl font-bold mb-2 text-white">COMPASSION</h2>
          <p className="text-l mt-5 font-bold mb-2 text-white">
            LET'S ALL BELIEVE IN PROTECTING, PRESERVING AND NURTURING LIVES.
          </p>
          <p className="text-sm mt-5 mb-2 text-white">
            Animals in India and around the world need our help! Wild animals
            are disappearing, and street animals are suffering. SnowTails cares
            about animals in the Himalayas.
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
      </div>
      <div className="flex-1">
        <div className="flex-col">
          <div className=" flex justify-center relative right-24 top-8 ">
            <img
              src="/assets/cause-1.png"
              alt="For cause image"
              className="max-w-[50%] max-h-[50%] object-cover"
            />
          </div>
          <div className="flex justify-center relative left-24 bottom-20 overflow-auto">
            <img
              src="/assets/cause-2.png"
              alt="For cause image"
              className="max-w-[50%] max-h-[50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cause;
