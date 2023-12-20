import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <section id="contact" className="bg-red h-max w-full">
      <div className="relative pt-[5%]">
        <div className="px-[2%] mb-[-3%]">
          <img src="/assets/contact-page.png"></img>
        </div>
        <div className="flex justify-between text-center w-full px-[1%] py-[2%] bg-gray-200">
          <div className=" w-[50%] ">
            <h1 className="text-8xl font-bold text-bloodred">
              FUR-TASTIC FROST RUN
            </h1>
          </div>
          <div className="w-[50%] flex flex-col items-center justify-between py-3">
            <p>
              Get ready for more fun and adventure this season. Calling all pet
              parents, grab your furry baby because SnowTails 2023 presents
              India’s 2nd Snow Dog Race! Get ready for more fun and adventure
              this season. Calling all pet parents, grab your furry baby because
              SnowTails 2023 presents India’s 2nd Snow Dog Race!
            </p>
            <div>
              <Button />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="max-h-sm max-w-sm ">
          <img
            src="/assets/contact-page-2.png"
            alt="paws image"
            className=""
          ></img>
        </div>
        <div className="flex flex-col text-center mb-[2%]">
          <ul className="text-white">
            <li>Northern Escapes Outdoors Pvt. Ltd.</li>
            <li>Sissu, Lahaul & Spiti</li>
            <li>Himachal Pradesh – 175140</li>
            <li>Contact Number: +91 9871511133</li>
            <li>Email: snowtailslahaul@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
