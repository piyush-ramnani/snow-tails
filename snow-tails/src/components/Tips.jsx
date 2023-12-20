import React from "react";

const Tips = () => {
  return (
    <section id="tips" className="bg-red flex h-max w-full">
      <div className="flex-1">
        <div className="m-10 h-5/6 flex items-center justify-center">
          <img
            src="/assets/tips-and-travel.png"
            alt="How to reach us image"
            className="max-w-sm max-h-md object-cover"
          />
        </div>
      </div>
      <div className="flex-1 ">
        <div className="m-14 flex-col ">
          <h1 className="text-5xl font-bold mb-1 text-bloodred">
            HOW TO REACH
          </h1>
          <h1 className="text-5xl font-bold mb-2 text-white">SISSU</h1>
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
              <div className="flex-col"></div>
              <h5 className="text-l mt-5 font-bold mb-1 text-white">
                Distance
              </h5>
              <ul className="text-sm text-white">
                <li>New Delhi - Manali</li>
                <li>New Delhi - Kullu</li>
                <li>Kullu - Manali</li>
                <li>Chandigarh - Manali</li>
                <li>Manali - Sissu</li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="flex-col"></div>
              <h5 className="text-l mt-5 font-bold mb-1 text-white">
                Transport
              </h5>
              <ul className="text-sm text-white">
                <li>Bus</li>
                <li>Flight</li>
                <li>Taxi / Bus</li>
                <li>Bus</li>
                <li>Taxi / Bus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
