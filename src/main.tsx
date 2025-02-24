import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import App from "./App";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default Main;
