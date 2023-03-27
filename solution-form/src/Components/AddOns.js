import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddOns = () => {
  const navigate = useNavigate();
  const plan = useSelector((store) => store.plan);
  const { isChecked, monthlyAddOns, yearlyAddOns } = plan;
  const { game, storage, profile } = isChecked ? yearlyAddOns : monthlyAddOns;
  return (
    <div className="px-20 py-12 border-2 border-red-500 w-[75%]">
      <h1 className="text-4xl py-2 font-bold">Pick add-ons</h1>
      <p className="text-gray-400 text-base ">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="w-[60%] my-5 gap-5 flex flex-col">
        <div className="flex justify-between items-center gap-2 w-full p-4 border-2 border-gray-400 rounded-xl">
          <input type="checkbox" className="w-5 h-5" checked />
          <div className="w-[70%]">
            <h2 className="text-base text-blue-900 font-bold">
              Online Services
            </h2>
            <p className="text-sm text-gray-400">Access to multiplayer games</p>
          </div>
          <span className="text-blue-500">
            +${game}/{isChecked ? "yr" : "mo"}
          </span>
        </div>
        <div className="flex justify-between items-center gap-2 w-full p-4 border-2 border-gray-400 rounded-xl">
          <input type="checkbox" className="w-5 h-5" checked />
          <div className="w-[70%]">
            <h2 className="text-base text-blue-900 font-bold">
              Larger Storage
            </h2>
            <p className="text-sm text-gray-400">Extra 1TB of cloud save</p>
          </div>
          <span className="text-blue-500">
            +${storage}/{isChecked ? "yr" : "mo"}
          </span>
        </div>
        <div className="flex justify-between items-center gap-2 w-full p-4 border-2 border-gray-400 rounded-xl">
          <input type="checkbox" className="w-5 h-5" />
          <div className="w-[70%]">
            <h2 className="text-base text-blue-900 font-bold">
              Customizable profile
            </h2>
            <p className="text-sm text-gray-400">
              Custom theme on your profile
            </p>
          </div>
          <span className="text-blue-500">
            +${profile}/{isChecked ? "yr" : "mo"}
          </span>
        </div>
      </div>
      <div className="w-[60%] flex justify-between p-4">
        <button onClick={() => navigate("/plan-page")}>Go Back</button>
        <button
          onClick={() => navigate("/finishing-up")}
          className="ml-auto px-3 py-2 bg-blue-900 text-white rounded-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default AddOns;
