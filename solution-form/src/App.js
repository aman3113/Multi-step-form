import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import AddOns from "./Components/AddOns";
import AppLayout from "./Components/AppLayout";
import FinishingUp from "./Components/FinishingUp";
import PersonalInfo from "./Components/PersonalInfo";
import Plan from "./Components/Plan";
import Thankyou from "./Components/Thankyou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <PersonalInfo />,
      },
      {
        path: "plan-page",
        element: <Plan />,
      },
      {
        path: "add-ons",
        element: <AddOns />,
      },
      {
        path: "finishing-up",
        element: <FinishingUp />,
      },
      {
        path: "thankyou",
        element: <Thankyou />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
