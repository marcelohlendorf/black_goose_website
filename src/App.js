import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Privacy from './Privacy.js'
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/">
              <Home/>
          </Route>
          <Route exact path="/privacy-policy">
            <div>
              <Privacy/>
            </div>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
