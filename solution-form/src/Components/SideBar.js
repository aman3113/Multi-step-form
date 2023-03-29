import React from "react";
// import Background from "../assets/images/bg-sidebar-desktop.svg";

const SideBar = ({ path }) => {
  return (
    <div className=" sideBar lg:w-[25%] h-[30vh] lg:h-auto pl-6 py-7 lg:mr-6 rounded-xl flex lg:flex-col justify-center  items-start lg:justify-start lg:gap-4 gap-8">
      <div className="flex items-center">
        <span
          className={` p-3  rounded-[50%] border-2 border-white ${
            path === "/" ? "text-black bg-sky-200" : "text-white"
          } flex items-center justify-center w-10 h-10`}
        >
          1
        </span>
        <div className="flex-col lg:flex p-2 hidden">
          <span className="text-xs">STEP 1</span>
          <span className="text-sm text-white font-semibold tracking-wider">
            YOUR INFO
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <span
          className={` p-3  rounded-[50%] border-2 border-white ${
            path === "/plan-page" ? "text-black bg-sky-200" : "text-white"
          } flex items-center justify-center w-10 h-10`}
        >
          2
        </span>
        <div className="flex-col lg:flex hidden p-2">
          <span className="text-xs">STEP 2</span>
          <span className="text-sm  text-white font-semibold tracking-wider">
            SELECT PLAN
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <span
          className={` p-3  rounded-[50%] border-2 border-white ${
            path === "/add-ons" ? "text-black bg-sky-200" : "text-white"
          } flex items-center justify-center w-10 h-10`}
        >
          3
        </span>
        <div className="flex-col lg:flex hidden p-2">
          <span className="text-xs">STEP 3</span>
          <span className="text-sm  text-white font-semibold tracking-wider">
            ADD-ONS
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <span
          className={` p-3  rounded-[50%] border-2 border-white ${
            path === "/finishing-up" ? "text-black bg-sky-200" : "text-white"
          } flex items-center justify-center w-10 h-10`}
        >
          4
        </span>
        <div className="flex-col lg:flex hidden p-2">
          <span className="text-xs">STEP 2</span>
          <span className="text-sm  text-white font-semibold tracking-wider">
            SUMMARY
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
