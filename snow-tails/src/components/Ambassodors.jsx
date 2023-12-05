import React from "react";

const Ambassodors = () => {
  return (
    <section id="ambassadors" className="bg-red relative h-max w-full">
      <div className="px-[30%] py-[5%]">
        <div className="flex flex-col items-center text-center">
          <div>
            <h2 className="text-5xl font-bold mb-1 text-bloodred">
              CAPTAIN BHALOO
            </h2>

            <h3 className="text-l mt-5 font-bold mb-1 text-white">
              Ambassador
            </h3>

            <p className="text-sm mt-5 mb-5 text-white">
              We'd be delighted to help you and your furry buddy/pooch in
              getting your travel and stay organized. If you have any questions
              or concerns, please do not hesitate to contact us.
            </p>
          </div>
          <div className="flex items-center max-h-md max-w-md">
            <img src="/assets/ambassador.png" alt="Captain Bhaloo" />
          </div>
          <div className="flex items-center max-h-xs max-w-xs">
            <img src="/assets/ambassador-2.png" alt="snow-tails" />
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-1 text-bloodred">
              OTHER AMBASSADORS
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassodors;
