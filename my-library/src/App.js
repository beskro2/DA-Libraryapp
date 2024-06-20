import React from "react";
import "./App.css";
import Books from "./Books";
import Events from "./Events";
import LibraryInfo from "./LibraryInfo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/LibraryInfo">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/Books">Books</NavLink>
            </li>
            <li>
              <NavLink to="/Events">Events</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/LibraryInfo" component={LibraryInfo} />
          <Route path="/Books" component={Books} />
          <Route path="/Events" component={Events} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
