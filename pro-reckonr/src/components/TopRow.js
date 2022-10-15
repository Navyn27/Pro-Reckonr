import React from "react";
import Add from "../public/add.svg";
import Del from "../public/delete.svg";

class TopRow extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render(props) {
    return (
      <div className="topRow">
        <button
          className="opBtn ac"
          onClick={() => {
            this.props.clearEntry();
          }}
        >
          CE
        </button>
        <button
          className="opBtn del"
          onClick={() => {
            this.props.del();
          }}
        >
          <img src={Del} alt="" />
        </button>
        <button className="opBtn mult">
          <img src={Add} alt="" />
        </button>
      </div>
    );
  }
}

export default TopRow;
