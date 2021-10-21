import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Privacy from './Privacy.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/black_goose_website/privacy-policy">
            <div>
              <Privacy/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
