import React from "react";

const Rules = () => {
  return (
    <section
      id="rules"
      className="bg-red py-16 flex w-full border border-white"
    >
      {/* Left section with GIF/SVG */}
      <div className="flex-1 border border-yellow-400">
        <div className="flex justify-center">
          <img
            src="/assets/rules-to-follow.png"
            alt="Rules image"
            className="max-w-[50%] max-h-[60%] "
          />
        </div>
      </div>

      {/* Right section with heading and bullet points */}
      <div className="flex-1 flex justify-center border border-yellow-400 ">
        <div className="px-10">
          <div className="flex">
            <h2 className="text-5xl font-bold mb-2 text-white">RULES</h2>
            <h2 className="text-5xl font-bold mb-2 ml-2 text-bloodred">
              TO FOLLOW
            </h2>
          </div>
          <ul className="list-disc text-white">
            <li>
              {" "}
              <p className="text-sm mt-5 mb-2 text-white">
                During the race, each dog must be accompanied by a human
                companion/parent.
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm mt-5 mb-2 text-white">
                Your pooch must be leashed and in a comfortable body harness.
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm mt-5 mb-2 text-white">
                We recommend you bring a muzzle if you are unsure how your pooch
                may react to unknown human and dogs around.
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm mt-5 mb-2 text-white">
                To participate, your dog needs to be in good health.
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm mt-5 mb-2 text-white">
                The pooch should be fully vaccinated, and the updated health
                record must be presented before the race.
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm mt-5 mb-2 text-white">
                On March 12, 2024, the reporting time will be at 1000 hrs (IST),
                and the race will begin at 11:00 hrs (IST).
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm mt-5 mb-2 text-white">
                The Decision of the Race Director will be Final, Binding, and
                Non-Contestable.
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm mt-5 mb-2 text-white">
                he human companions/pet parents must sign the ‘Indemnity Bond’
                before the race.
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm mt-5 mb-2 text-white">
                Carry towels for your pooch, so they can be comfortably dry post
                the race.
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm mt-5 mb-2 text-white">
                Bring water bottles for yourself and your dog, so we do not
                litter the fragile ecosystem of Lahaul.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Rules;
