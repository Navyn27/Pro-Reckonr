import React from "react";

class Nums extends React.Component {
  render(identify) {
    let labels = [7, 8, 9, 4, 5, 6, 1, 2, 3];
    let nums = labels.map((label) => {
      return (
        <button
          key={`num${labels.indexOf(label)}`}
          className={`num`}
          onClick={(e) => this.props.handleInput(e)}
        >
          {label}
        </button>
      );
    });
    return <div className="nums">{nums}</div>;
  }
}

export default Nums;
