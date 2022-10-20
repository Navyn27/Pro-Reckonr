import "./App.css";
import React from "react";
import Body from "./components/Body";
import AdvaMath from "./components/AdvaMath";

function App() {
  return (
    <div className="parentContainer">
      <div className="App">
        <Body />
      </div>
      <AdvaMath />
    </div>
  );
}

export default App;
