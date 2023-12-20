import React, { useState } from "react";

const Button = () => {
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const registerAndPay = async () => {
    setIsPaymentLoading(true);

    setTimeout(() => {
      window.open("https://payments.cashfree.com/forms/SnowTails", "_blank");
      setIsPaymentLoading(false);
    }, 1000);
    // Redirect to payment page
  };

  return (
    <div>
      <button
        onClick={registerAndPay}
        disabled={isPaymentLoading}
        className="middle none center w-auto rounded-full bg-bloodred py-3 px-10 font-sans text-l font-bold uppercase text-white shadow-sm shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-gray-900 focus:opacity-[0.65] focus:shadow-none active:opacity-[0.65] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        {isPaymentLoading ? "Processing..." : "Register and Pay"}
      </button>
    </div>
  );
};

export default Button;
