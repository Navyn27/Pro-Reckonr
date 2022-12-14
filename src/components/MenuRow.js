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
        <button
          className="topR deg"
          onClick={() => {
            this.props.handleMode();
          }}
        >
          {this.props.piValue}
        </button>
        <button
          className="topR Scie"
          onClick={() => {
            this.props.handleScieMode();
          }}
        >
          SCIE
        </button>
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
