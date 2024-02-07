import Import from "../components/Pages/Import/ImportFile"; 
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Login/Register";
import HomeSearch from "../components/Pages/Search/HomeSearch" 


const routesData = [
  {
    path: "/login",
    element: <Login />,
    title: "login",
    isPrivate: false
  },
  {
    path: "/register",
    element: <Register />,
    title: "register",
    component: 'Register',
    isPrivate: false
  },
  {
    path: "/",
    element: <HomeSearch />,
    title: "home",
    component: 'HomeSearch',
    isPrivate: true
  },
  // {
  //   path: "/search",
  //   element: <Search />,
  //   title: "search"
  // },
  {
    path: "/import",
    element: <Import />,
    title: "import",
    component: 'Import',
    isPrivate: true
  }
];
export default routesData;