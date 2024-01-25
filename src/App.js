import logo from './logo.svg';
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
        <header className="App-header">
          <Routes>
            {
              routesData.map((element, index) => {
                return (
                  <Route key={index} path={element.path} element={element.element} />
                )
              })
            }
          </Routes>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
