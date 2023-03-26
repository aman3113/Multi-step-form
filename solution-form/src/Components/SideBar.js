import React from "react";
// import Background from "../assets/images/bg-sidebar-desktop.svg";

const SideBar = () => {
  return (
    <div className=" sideBar w-[23%] h-full pl-6 py-7 mr-6 rounded-xl flex flex-col gap-4 border-2 border-green-700">
      <div className="flex items-center">
        <span className=" p-3  rounded-[50%] bg-sky-200 flex items-center justify-center w-10 h-10">
          1
        </span>
        <div className="flex-col flex p-2">
          <span className="text-xs">STEP 1</span>
          <span className="text-sm">YOUR INFO</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className=" p-3  rounded-[50%] bg-sky-200 flex items-center justify-center w-10 h-10">
          2
        </span>
        <div className="flex-col flex p-2">
          <span className="text-xs">STEP 2</span>
          <span className="text-sm">SELECT PLAN</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className=" p-3  rounded-[50%] bg-sky-200 flex items-center justify-center w-10 h-10">
          3
        </span>
        <div className="flex-col flex p-2">
          <span className="text-xs">STEP 3</span>
          <span className="text-sm">ADD-ONS</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className=" p-3  rounded-[50%] bg-sky-200 flex items-center justify-center w-10 h-10">
          4
        </span>
        <div className="flex-col flex p-2">
          <span className="text-xs">STEP 2</span>
          <span className="text-sm">SUMMARY</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
