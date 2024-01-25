import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";

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
    element: <Home />,
    title: "home"
  }
];
export default routesData;