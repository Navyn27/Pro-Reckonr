import React from "react";
import Pi from "../public/pi.svg";

class MenuRow extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="btns">
        <button
          className="topR ac"
          onClick={() => {
            this.props.clearScreen();
          }}
        >
          AC
        </button>
        <button className="topR deg">DEG</button>
        <button className="topR Scie">SCIE</button>
        <button
          className="topR del"
          onClick={() => {
            this.props.insertPi();
          }}
        >
          <img src={Pi} alt="" />
        </button>
      </div>
    );
  }
}

export default MenuRow;
