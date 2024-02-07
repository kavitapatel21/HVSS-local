// import logo from './logo.svg';
import './App.css';
import './Routes/Routes.js';
//import routesData from './Routes/Routes.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import PrivateRoute from './Routes/PrivateRoute.js';
import Login from './components/Pages/Login/Login.js';
import Register from './components/Pages/Login/Register.js';
import HomeSearch from './components/Pages/Search/HomeSearch.js';
import Import from './components/Pages/Import/ImportFile.js';
import AddRules from './components/Pages/Subcodes/Addrules.js';
import SubcodesData from './components/Pages/Subcodes/Index.js';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<HomeSearch/>}/>
          </Route>
          <Route exact path='/import' element={<PrivateRoute/>}>
            <Route exact path='/import' element={<Import/>}/>
          </Route>
          <Route exact path='/add-rules' element={<PrivateRoute/>}>
            <Route exact path='/add-rules' element={<AddRules/>}/>
          </Route>
          <Route exact path='/subcodes' element={<PrivateRoute/>}>
            <Route exact path='/subcodes' element={<SubcodesData/>}/>
          </Route>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
        {/* <Routes>
          
            <Route exact path='/' element={<HomeSearch/>}/>
          
            <Route exact path='/import' element={<Import/>}/>
          
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes> */}
      </>
    </Router>
  );
}

export default App;
