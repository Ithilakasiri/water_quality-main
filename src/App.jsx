import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingUp from "./LogIn.jsx";
import Layout from "./Layout/Layout.jsx";
import Dashboard from "./UI/Dashboard.jsx";
import DataVisualization from "./UI/DataVisualization.jsx";
import Members from "./UI/Members.jsx";
import Report from "./UI/Report.jsx";
import SensorData from "./UI/SensorData.jsx";
import Setting from "./UI/Setting.jsx";
import ClientData from "./UI/ClientData.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SingUp />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/sensor-data", element: <SensorData /> },
      { path: "/data-visualization", element: <DataVisualization /> },
      { path: "/members", element: <Members /> },
      { path: "/reports", element: <Report /> },
      { path: "/settings", element: <Setting /> },
      { path: "/client-data", element: <ClientData /> },
    ],
  },
],{
  basename: '/water_quality-main'
});

export default function MainApp() {
  return <RouterProvider router={router} />;
}
