import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-400 h-[45vh] w-full">
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex-1 flex justify-around">
            <div className="p-6 mr-20">
              <h1 className="text-6xl font-bold text-bloodred">FUR-TASTIC</h1>
              <h1 className="text-6xl font-bold text-bloodred">FROST RUN</h1>
            </div>
          </div>
          <div className="flex-1 flex justify-around">
            <div className="p-5 ml-24">
              <p className="text-sm mt-3 mb-2 text-white">
                <p>
                  Get ready for more fun this fun and adventure this season.
                </p>
                <p>Calling all pet parents to grab your furry baby</p>
                <p>Because SNOW TAILS 2023 presents India's second snow race</p>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col flex justify-center items-center">
          <div className="text-xs -my-2 text-center">
            <div className="font-bold">
              <p>Northern Escapes Outdoors Pvt. Ltd.</p>
              <p>Sissu, Lahaul & Spiti</p>
              <p>Himachal Pradesh – 175140</p>
              <p>Contact Number: +91 9871511133</p>
              <p>Email: snowtailslahaul@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
