import React from "react";
import Dot from "../public/dot.svg";

class BottomRow extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="bottomRow">
        <button
          className="opBtn zero"
          onClick={(e) => {
            this.props.handleInput(e);
          }}
        >
          0
        </button>
        <button
          className="opBtn dot"
          onClick={() => {
            this.props.handleDotInput();
          }}
        >
          <img src={Dot} alt="" />
        </button>
      </div>
    );
  }
}

export default BottomRow;
