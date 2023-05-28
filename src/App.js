import React from "react";
import FunctionalComp from "./components/FunctionalComp";
import {ClassComp, ClassComp1} from "./components/ClassComp";
import Click from "./components/Click";
import Counter from "./components/Counter"

function App() {
  return (
    <div>
      <h1> hello !!! </h1>
      <h1> hi !!! </h1>
      <FunctionalComp />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
    </div>
    
  );
}

export default App;