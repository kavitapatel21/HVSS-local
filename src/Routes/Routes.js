import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Login/Register";
import HomeSearch from "../components/Pages/HomeSearch"

const routesData = [
  {
    path: "login",
    element: <Login />,
    title: "login"
  },
  {
    path: "register",
    element: <Register />,
    title: "register"
  },
  {
    path: "/",
    element: <HomeSearch />,
    title: "home"
  },
];
export default routesData;