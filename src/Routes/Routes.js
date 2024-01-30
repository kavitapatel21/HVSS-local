import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import Search from "../components/Pages/Search/index";
import Import from "../components/Pages/Import/index";

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
  },
  {
    path: "/search",
    element: <Search />,
    title: "search"
  },
  {
    path: "/import",
    element: <Import />,
    title: "import"
  }
];
export default routesData;