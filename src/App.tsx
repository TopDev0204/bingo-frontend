import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Bingo from "./pages/Bingo";
import Home from "./pages/Home";
import "./App.css";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bingo" element={<Bingo />} />
            </Routes>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
