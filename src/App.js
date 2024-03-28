import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./pages/landing";
import LoginPage from "./pages/login_page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginPage /> }  />
              <Route path="/home" element={<Landing /> } />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
