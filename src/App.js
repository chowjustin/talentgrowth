import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArrayManipulation from "./components/ArrayManipulation";
import StringAnagram from "./components/StringAnagram";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/array" element={<ArrayManipulation />} />
          <Route path="/anagram" element={<StringAnagram />} />
          <Route path="/form" element={<Form />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
