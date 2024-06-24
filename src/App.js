import { Route, Router, Routes } from "react-router";
import Announcements from "./components/Announcements";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Men from "./components/Men";
function App() {
  return (
    <div className="App" style={{ background: "black", width: "100%" }}>
      <Announcements />
      <Home />
      <Routes>
        <Route path="/men" element={<Men />} />
      </Routes>
    </div>
  );
}

export default App;
