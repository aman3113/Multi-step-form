import React from "react";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handlePlan, setSelectedPlan } from "../Store/planSlice";

const Plan = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const plan = useSelector((store) => store.plan);
  const { isChecked, monthlyPlan, yearlyPlan, selectedPlan } = plan;

  const { arcade, advanced, pro } = isChecked ? yearlyPlan : monthlyPlan;
  return (
    <div className="sm:px-20 px-3 py-8">
      <h1 className="md:text-4xl text-xl py-2 font-bold">Select Your Plan</h1>
      <p className="text-gray-400 text-base ">
        You have the option of yearly or monthly billing.
      </p>
      <div className="flex flex-col lg:flex-row w-full lg:w-[75%] gap-4 justify-between my-4">
        <div
          onClick={() => dispatch(setSelectedPlan("arcade"))}
          className={`border-2 ${
            selectedPlan === "arcade" ? "border-blue-900" : "border-gray-300"
          }  p-4 gap-4 lg:gap-0 rounded-xl lg:w-[30%] cursor-pointer w-full flex lg:flex-col items-center lg:items-start`}
        >
          <img src={Arcade} alt="arcade img" className="my-5" />
          <div>
            <p>Arcade</p>
            <p className="text-gray-400 text-base">
              ${arcade}/{isChecked ? "yr" : "mo"}
            </p>
            {isChecked ? <p className="text-sm">2 months free</p> : null}
          </div>
        </div>
        <div
          onClick={() => dispatch(setSelectedPlan("advanced"))}
          className={`border-2 ${
            selectedPlan === "advanced" ? "border-blue-900" : "border-gray-300"
          }  p-4 gap-4 lg:gap-0 rounded-xl lg:w-[30%] cursor-pointer w-full flex lg:flex-col items-center lg:items-start`}
        >
          <img src={Advanced} alt="arcade img" className="my-5" />
          <div>
            <p>Advanced</p>
            <p className="text-gray-400 text-base">
              ${advanced}/{isChecked ? "yr" : "mo"}
            </p>
            {isChecked ? <p className="text-sm">2 months free</p> : null}
          </div>
        </div>
        <div
          onClick={() => dispatch(setSelectedPlan("pro"))}
          className={`border-2 ${
            selectedPlan === "pro" ? "border-blue-900" : "border-gray-300"
          }  p-4 gap-4 lg:gap-0 rounded-xl lg:w-[30%] cursor-pointer w-full flex lg:flex-col items-center lg:items-start`}
        >
          <img src={Pro} alt="arcade img" className="my-5" />
          <div>
            <p>Pro</p>
            <p className="text-gray-400 text-base">
              ${pro}/{isChecked ? "yr" : "mo"}
            </p>
            {isChecked ? <p className="text-sm">2 months free</p> : null}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[75%] bg-sky-100 rounded-xl flex justify-center p-3">
        <div className="flex gap-5">
          <span>Monthly</span>
          <span>
            <input
              className="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault01"
              checked={isChecked}
              onClick={() => dispatch(handlePlan())}
            />
          </span>
          <span>Yearly</span>
        </div>
      </div>
      <div className="lg:w-[75%] w-full flex justify-between p-4 mt-10 sm:mt-0">
        <button onClick={() => navigate("/")}>Go Back</button>
        <button
          onClick={() => navigate("/add-ons")}
          className="ml-auto px-3 py-2 bg-blue-900 text-white rounded-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Plan;
