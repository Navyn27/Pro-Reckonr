import "./App.css";
import React from "react";
import Add from "./public/add.svg";
import Del from "./public/delete.svg";
import Divide from "./public/divide.svg";
import Sub from "./public/minus.svg";
import Mult from "./public/multiply.svg";
import Equals from "./public/equals.svg";

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
        <div className="body-reck">
          <div className="body-container">
            <TopRow />
            <Nums />
            <BottomRow />
          </div>
          <LeftPane />
        </div>
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
    let labels = [7, 8, 9, 4, 5, 6, 1, 2, 3];
    let nums = labels.map((label) => {
      return <button className={`num`}>{label}</button>;
    });
    return <div className="nums">{nums}</div>;
  }
}

class LeftPane extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="operations">
        <button className="opBtn">
          <img src={Add} alt="" />
        </button>
        <button className="opBtn sub">
          <img src={Sub} alt="" />i
        </button>
        <button className="opBtn divide">
          <img src={Divide} alt="" />
        </button>
        <button className="opBtn equals">
          <img src={Equals} alt="" />
        </button>
      </div>
    );
  }
}

class TopRow extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="topRow">
        <button className="opBtn ac">AC</button>
        <button className="opBtn del">
          <img src={Del} alt="" />i
        </button>
        <button className="opBtn mult">
          <img src={Mult} alt="" />
        </button>
      </div>
    );
  }
}

class BottomRow extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="bottomRow">
        <button className="opBtn ac">AC</button>
        <button className="opBtn del">
          <img src={Del} alt="" />i
        </button>
        <button className="opBtn mult">
          <img src={Mult} alt="" />
        </button>
      </div>
    );
  }
}

export default App;
