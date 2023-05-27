import FunctionalComp from "./components/FunctionalComp";
import {ClassComp, ClassComp1} from "./components/ClassComp";

function App() {
  return (
    <div>
      <h1> hello !!! </h1>
      <h1> hi !!! </h1>
      <FunctionalComp />
      <ClassComp />
      <ClassComp1 />
    </div>
    
  );
}

export default App;