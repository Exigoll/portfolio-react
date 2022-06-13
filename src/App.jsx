import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./scss/app.scss";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
