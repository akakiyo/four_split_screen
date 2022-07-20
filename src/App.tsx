import React from "react";
import { Route, Routes } from "react-router-dom";
import Top from "./routes/Top/Top";
import Play from "./routes/Play/Play";
import Result from "./routes/Result/Result";
import Osborn from "./routes/Osborn/Osborn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/play" element={<Play />} />
      <Route path="/result" element={<Result />} />
      <Route path="/osborn" element={<Osborn />} />
    </Routes>
  );
}

export default App;
