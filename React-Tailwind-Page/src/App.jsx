import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./coponents/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element />
          <Route path="/about" element />
        </Routes>
      </Router>
    </>
  );
}

export default App;
