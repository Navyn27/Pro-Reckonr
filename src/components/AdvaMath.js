import React from "react";

class MathFuncs extends React.Component {
  render() {
    return (
      <>
        <div className="mathFuncs">
          <div>
            <p className="sup topFuncs">
              sin()<sup>-1</sup>
            </p>
            <button
              onClick={(e) => {
                this.props.handleTrig(e);
              }}
              className="funcBtn"
            >
              sin()
            </button>
          </div>
          <div>
            <p className="sup topFuncs">
              cos()<sup>-1</sup>
            </p>
            <button
              onClick={(e) => {
                this.props.handleTrig(e);
              }}
              className="funcBtn"
            >
              cos()
            </button>
          </div>
          <div>
            <p className="sup topFuncs">
              tan()<sup>-1</sup>
            </p>
            <button
              onClick={(e) => {
                this.props.handleTrig(e);
              }}
              className="funcBtn"
            >
              tan()
            </button>
          </div>
          <div>
            <p className="sup topFuncs">
              log<sub>2</sub>
            </p>
            <button
              onClick={() => {
                this.props.handleScie(1);
              }}
              className="funcBtn"
            >
              ln()
            </button>
          </div>
          <div>
            <p className="sup topFuncs">&#8731;</p>
            <button
              onClick={() => {
                this.props.handleScie(2);
              }}
              className="funcBtn sqrt"
            >
              &radic;
            </button>
          </div>
          <div>
            <p className="sup topFuncs">
              x<sup>3</sup>
            </p>
            <button
              onClick={() => {
                this.props.handleScie(3);
              }}
              className="funcBtn sup"
            >
              x<sup>2</sup>
            </button>
          </div>
          <div>
            <p className="sup topFuncs">
              log<sub>10</sub>
            </p>
            <button
              onClick={() => {
                this.props.handleScie(4);
              }}
              className="funcBtn"
            >
              %
            </button>
          </div>
          <div>
            <p className="sup topFuncs">
              x<sup>!</sup>
            </p>
            <button
              onClick={(e) => {
                this.props.handleScie(5, e);
              }}
              className="funcBtn sup"
            >
              x<sup>-1</sup>
            </button>
          </div>
          <div>
            <button
              onClick={(e) => {
                this.props.handleShift(e);
              }}
              className="funcBtn shift"
            >
              shift
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default MathFuncs;
