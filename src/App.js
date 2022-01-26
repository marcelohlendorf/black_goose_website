import './App.css';
import Home from './Home.js'
import Privacy from './Privacy.js'
import ScrollToTop from './ScrollToTop.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/black_goose_website">
              <Home/>
          </Route>
          <Route exact path="/privacy-policy">
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
