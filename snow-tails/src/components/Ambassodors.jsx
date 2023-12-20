import React from "react";

const Ambassodors = () => {
  return (
    <section id="ambassadors" className="bg-red relative h-max w-full">
      <div className="px-[10%] py-[3%]">
        <div className="flex flex-col items-center text-center">
          <div>
            <h1 className="text-5xl font-bold mb-1 text-bloodred">
              CAPTAIN BHALOO
            </h1>

            <h3 className="text-l mt-5 font-bold mb-1 text-white">
              Ambassador
            </h3>

            <p className="text-sm mt-5 mb-5 text-white">
              Captain Bhaloo Singh, enamored by Mother Nature, invites all to
              her playground. The Divine courses through him like snowflakes
              from the Heavens. After a run, he savors glacial meltwater in
              sub-zero temperatures. Captain Bhaloo, the epitome of cool, revels
              in challenges amid mountainous twists. Whether on a Bullet or
              four-wheelers, he embraces adventure. The fastest on sinewy
              grounds, he adores mountainous snow shows. King of the mountains,
              Captain Bhaloo Singh dictates a rule book promising freedom for
              those who follow.
            </p>
          </div>
          <div className="flex items-center max-h-md max-w-xl">
            <img src="/assets/ambassador.png" alt="Captain Bhaloo" />
          </div>
          <div className="flex items-center max-h-xs max-w-xs">
            <img src="/assets/ambassador-2.png" alt="snow-tails" />
          </div>
          <div>
            {/* <h2 className="text-5xl font-bold mb-1 text-bloodred">
              OTHER AMBASSADORS
            </h2> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassodors;
