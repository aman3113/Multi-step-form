import React from "react";
import Thanks from "../assets/images/icon-thank-you.svg";

const Thankyou = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh] p-16">
      <div className="w-[60%] flex flex-col items-center">
        <img src={Thanks} alt="thankyou" />
        <p className="text-center mt-6 text-gray-500">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Thankyou;
