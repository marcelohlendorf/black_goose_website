import './App.css';
import Home from './Home.js';
import Privacy from './Privacy.js';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<Privacy/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
