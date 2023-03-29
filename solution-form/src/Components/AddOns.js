import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAddOn } from "../Store/planSlice";

const AddOns = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const plan = useSelector((store) => store.plan);
  const { isChecked, monthlyAddOns, yearlyAddOns, selectedAddOn } = plan;
  const { game, storage, profile } = isChecked ? yearlyAddOns : monthlyAddOns;

  return (
    <div className="sm:px-20 px-3 py-4">
      <h1 className="md:text-4xl text-xl py-2 font-bold">Pick add-ons</h1>
      <p className="text-gray-400 text-base ">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="lg:w-[80%] w-full my-5 gap-5 flex flex-col">
        <div
          onClick={() => dispatch(setSelectedAddOn(1))}
          className={`flex justify-between items-center gap-2 w-full p-4 border-2 rounded-xl border-blue-800 cursor-pointer`}
        >
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
        <div
          onClick={() => dispatch(setSelectedAddOn(2))}
          className={`flex justify-between items-center gap-2 w-full p-4 border-2 rounded-xl ${
            selectedAddOn === 2
              ? "border-blue-800"
              : " border-gray-400 cursor-pointer"
          }`}
        >
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={selectedAddOn === 2}
          />
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
        <div
          onClick={() => dispatch(setSelectedAddOn(3))}
          className={`flex justify-between items-center gap-2 w-full p-4 border-2 rounded-xl ${
            selectedAddOn === 3
              ? "border-blue-800"
              : " border-gray-400 cursor-pointer"
          }`}
        >
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={selectedAddOn === 3}
          />
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
      <div className="lg:w-[80%] w-full flex justify-between p-4">
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
