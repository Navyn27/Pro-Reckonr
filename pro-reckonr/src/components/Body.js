import React from "react";
import Nums from "./Nums";
import TopRow from "./TopRow";
import LeftPane from "./LeftPane";
import BottomRow from "./BottomRow";
import MenuRow from "./MenuRow";
import Parser from "html-react-parser";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: "",
      prevInput: "",
      input: "",
      pi: "",
      angleMode: "DEG",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleOpClick = this.handleOpClick.bind(this);
    // this.makeOp = this.makeOp.bind(this);
  }

  handleInput = (event) => {
    let inputChange = this.state.input + event.target.innerText;
    if (inputChange.length === 15) {
      document.getElementsByClassName("errMessage")[0].style.display = "block";
      setTimeout(() => {
        document.getElementsByClassName("errMessage")[0].style.display = "none";
      }, 2000);
    } else {
      this.setState({
        input: inputChange,
      });
    }
  };

  handleDotInput = () => {
    let inputChange;
    if (this.state.input === "") {
      inputChange = "0.";
      this.setState({
        input: inputChange,
      });
    } else if (!this.state.input.includes(".")) {
      inputChange = this.state.input + ".";
      this.setState({
        input: inputChange,
      });
    }
  };

  clearEntry = () => {
    this.setState({
      input: "",
    });
  };

  clearScreen = () => {
    this.setState({
      operation: "",
      opAnswer: 0,
      prevInput: "",
      input: "",
    });
  };

  handleOpClick = (event) => {
    let operation;
    if (event.target.tagName === "BUTTON") {
      operation = event.target.childNodes[0].alt;
    } else if (event.target.tagName === "IMG") {
      operation = event.target.alt;
    }
    if (this.state.prevInput.length >= 2) {
      console.log(this.state.prevInput, this.state.input, this.state.operation);
      this.setState({
        prevInput: `${this.makeOp(this.state.operation)}${operation}`,
        input: "",
        operation,
      });
    } else {
      this.setState({
        prevInput: `${this.state.input}${operation}`,
        input: "",
        operation,
      });
    }
  };

  makeOp = (operation) => {
    switch (operation) {
      case "+":
        return (
          Number(this.state.input) +
          Number(this.state.prevInput.slice(0, this.state.prevInput.length - 1))
        );
      case "-":
        return (
          Number(
            this.state.prevInput.slice(0, this.state.prevInput.length - 1)
          ) - Number(this.state.input)
        );
      case "/":
        return (
          Number(
            this.state.prevInput.slice(0, this.state.prevInput.length - 1)
          ) / Number(this.state.input)
        );
      case "*":
        return (
          Number(this.state.input) *
          Number(this.state.prevInput.slice(0, this.state.prevInput.length - 1))
        );

      default:
        return "";
    }
  };

  insertPi = () => {
    this.setState({
      input: this.state.pi,
    });
  };

  handlePiClick = () => {
    this.setState({
      input: 3.142,
    });
  };

  deleteChar = () => {
    let newValue = this.state.input.slice(0, this.state.input.length - 1);
    this.setState({
      input: newValue,
    });
  };

  renderAnswer = () => {
    if (this.state.prevInput.length >= 2) {
      console.log(this.state.prevInput, this.state.input, this.state.operation);
      this.setState({
        prevInput: `${this.makeOp(this.state.operation)}`,
        input: "",
      });
    }
  };

  handleMode = () => {
    if (this.state.angleMode === "DEG") {
      this.setState({
        angleMode: "RAD",
        pi: 180,
      });
    } else {
      this.setState({
        angleMode: "DEG",
        pi: 3.142,
      });
    }
  };

  render() {
    return (
      <>
        <p className="errMessage">
          Input overflow, consider using scientific notation
        </p>
        <p className="header">PRO~RECKONR</p>
        <div className="screen">
          <p>{Parser(this.state.prevInput)}</p>
          <input value={this.state.input} disabled />
        </div>
        <MenuRow
          insertPi={this.insertPi}
          clearScreen={this.clearScreen}
          handleMode={this.handleMode}
          piValue={this.state.angleMode}
        />
        <div className="body-reck">
          <div className="body-container">
            <TopRow
              clearEntry={this.clearEntry}
              del={this.deleteChar}
              handleOpClick={this.handleOpClick}
            />
            <Nums handleInput={this.handleInput} />
            <BottomRow
              handleInput={this.handleInput}
              handleDotInput={this.handleDotInput}
            />
          </div>
          <LeftPane
            handleOpClick={this.handleOpClick}
            renderAnswer={this.renderAnswer}
          />
        </div>
      </>
    );
  }
}

export default Body;
