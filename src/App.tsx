import { createBrowserRouter, RouterProvider } from "react-router";
import AppRoutes from "./AppRoutes";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import DashboardContent from "./components/DashboardContent";
import MyTaskContent from "./components/MyTaskContent";
import VitalTaskContent from "./components/VitalTaskContent";
import AccountInfomation from "./components/AccountInfomation";
import ChangePassword from "./components/ChangePassword";
import ViewTask from "./components/ViewTask";
import TaskCategory from "./components/TaskCategory";
import CreateCategory from "./components/CreateCategory";
import ProtectedUser from "./middlewares/ProtectedUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoutes />,
    children: [
      // {
      //   element: <ProtectedUser />,
      //   children: [
      {
        path: "",
        element: <Home />,
        children: [
          { path: "", element: <DashboardContent /> },
          {
            path: "vitaltask",
            element: <VitalTaskContent />,
          },
          { path: "mytask", element: <MyTaskContent /> },
          {
            path: "accountinformation",
            element: <AccountInfomation />,
          },
          { path: "changepassword", element: <ChangePassword /> },
          { path: "viewtask", element: <ViewTask /> },
          { path: "taskcategory", element: <TaskCategory /> },
          { path: "createcategory", element: <CreateCategory /> },
        ],
      },
      // ],
      // },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
