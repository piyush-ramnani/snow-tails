import React from "react";

const Button = () => {
  return (
    <div>
      <button
        className="middle none center w-auto rounded-full bg-bloodred py-3 px-10 font-sans text-xs font-bold uppercase text-white shadow-sm shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-gray-900 focus:opacity-[0.65] focus:shadow-none active:opacity-[0.65] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        Register now
      </button>
    </div>
  );
};

export default Button;
