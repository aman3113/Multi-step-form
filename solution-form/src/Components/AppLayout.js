import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AppLayout = () => {
  return (
    <div className="flex border-2 h-screen p-4 border-red-900 overflow-hidden">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
