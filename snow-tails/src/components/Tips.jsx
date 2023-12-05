import React from "react";

const Tips = () => {
  return (
    <section id="tips" className="bg-red flex h-screen w-full">
      <div className="flex-1 bg-yellow-600">
        <div className="m-14 h-5/6 flex items-center justify-center bg-gray-400">
          <img
            src="/assets/tips-and-travel.png"
            alt="How to reach us image"
            className="max-w-full max-h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1 bg-green-600">
        <div className="m-14 flex-col bg-gray-400">
          <h2 className="text-5xl font-bold mb-1 text-bloodred">
            HOW TO REACH
          </h2>
          <h2 className="text-5xl font-bold mb-2 text-white">SISSU</h2>
          <p className="text-l mt-5 font-bold mb-1 text-white">
            Travelling and stay is important for your pooch to adjust in the
            cold weather before the race
          </p>
          <p className="text-sm mt-5 mb-1 text-white">
            We'd be delighted to help you and your furry buddy/pooch in getting
            your travel and stay organized. If you have any questions or
            concerns, please do not hesitate to contact us.
          </p>
          <div className="flex">
            <div className="flex-1">
              <h5>left</h5>
            </div>
            <div className="flex-1">
              <h5>Right</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
