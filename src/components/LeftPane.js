import React from "react";
import Divide from "../public/divide.svg";
import Sub from "../public/minus.svg";
import Mult from "../public/multiply.svg";
import Equals from "../public/equals.svg";

class LeftPane extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="operations">
        <button
          className="opBtn mult"
          onClick={(e) => {
            this.props.handleOpClick(e);
          }}
        >
          <img src={Mult} alt="*" />
        </button>
        <button
          className="opBtn sub"
          onClick={(e) => {
            this.props.handleOpClick(e);
          }}
        >
          <img src={Sub} alt="-" />
        </button>
        <button
          className="opBtn divide"
          onClick={(e) => {
            this.props.handleOpClick(e);
          }}
        >
          <img src={Divide} alt="/" />
        </button>
        <button
          className="opBtn equals"
          onClick={() => {
            this.props.renderAnswer();
          }}
        >
          <img src={Equals} alt="" />
        </button>
      </div>
    );
  }
}

export default LeftPane;
