import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AppLayout = () => {
  return (
    <div className="lg:flex lg:p-6 h-full lg:w-[80%] w-[90%] rounded-xl bg-white relative">
      <SideBar />
      <div className="lg:static w-[75%] bg-white absolute top-[45%] left-[50%] translate-x-[-50%] lg:translate-x-0 rounded-2xl mb-7 lg:mb-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
