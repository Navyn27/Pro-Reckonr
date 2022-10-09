import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

class Body extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <p className="header">PRO~RECKONR</p>
        <section className="screen"></section>
        <MenuRow />
        <Nums />
      </>
    );
  }
}

class MenuRow extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="btns">
        <button className="topR ac">AC</button>
        <button className="topR deg">DEG</button>
        <button className="topR Scie">SCIE</button>
        <button className="topR del">DEL</button>
      </div>
    );
  }
}

class Nums extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let labels = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    let nums = labels.map((label) => {
      return <button className={`num`}>{label}</button>;
    });
    return <div className="nums">{nums}</div>;
  }
}
export default App;
