// import logo from './logo.svg';
import './App.css';
import './Routes/Routes.js';
import routesData from './Routes/Routes.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            {
              routesData.map((element, index) => {
                return (
                  <Route key={index} path={element.path} element={element.element} />
                )
              })
            }
          </Routes> 
      </div>
    </Router>
  );
}

export default App;
