import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const FinishingUp = () => {
  const navigate = useNavigate();
  const plan = useSelector((store) => store.plan);
  const {
    isChecked,
    monthlyPlan,
    yearlyPlan,
    monthlyAddOns,
    yearlyAddOns,
    selectedPlan,
    selectedAddOn,
  } = plan;

  const planPrice = isChecked
    ? yearlyPlan[selectedPlan]
    : monthlyPlan[selectedPlan];
  const gameAddOn = isChecked ? yearlyAddOns.game : monthlyAddOns.game;
  const storageAddOn = isChecked ? yearlyAddOns.storage : monthlyAddOns.storage;

  const totalPrice = planPrice + gameAddOn + storageAddOn;

  return (
    <div className="sm:px-20 px-3 py-8 ">
      <h1 className="md:text-4xl text-xl py-2 font-bold">Finishing Up</h1>
      <p className="text-gray-400 text-base ">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-blue-50 lg:w-[80%] w-full p-6 rounded-xl mt-8">
        <div className="w-full flex justify-between items-center mb-3 ">
          <div>
            <div className="text-lg text-blue-900">
              {selectedPlan} ({isChecked ? "yearly" : "monthly"})
            </div>
            <Link to={"/plan-page"} className="text-sm text-gray-400">
              change
            </Link>
          </div>
          <div className="text-blue-900 font-bold">
            ${planPrice}/{isChecked ? "yr" : "mo"}
          </div>
        </div>
        <hr />
        <div className="w-full flex justify-between items-center my-3">
          <div className="text-sm text-gray-400">Online Service</div>
          <div className="text-sm text-blue-800">
            +${gameAddOn}/{isChecked ? "yr" : "mo"}
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="text-sm text-gray-400">
            {selectedAddOn === 2 ? "Local Storage" : "Customizable Profile"}
          </div>
          <div className="text-sm text-blue-800">
            +${storageAddOn}/{isChecked ? "yr" : "mo"}
          </div>
        </div>
      </div>
      <div className="lg:w-[80%] w-full p-6 flex justify-between items-center">
        <div className="text-sm text-gray-400">
          Total ({isChecked ? "per year" : "per month"})
        </div>
        <div className="font-bold text-blue-800">
          +${totalPrice}/{isChecked ? "yr" : "mo"}
        </div>
      </div>
      <div className="w-full lg:w-[80%] flex justify-between p-4">
        <button onClick={() => navigate("/add-ons")}>Go Back</button>
        <button
          onClick={() => navigate("/thankyou")}
          className="ml-auto px-3 py-2 bg-blue-900 text-white rounded-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default FinishingUp;
