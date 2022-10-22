import React from "react";
import Nums from "./Nums";
import TopRow from "./TopRow";
import LeftPane from "./LeftPane";
import BottomRow from "./BottomRow";
import MenuRow from "./MenuRow";
import Parser from "html-react-parser";
import AdvaMath from "./AdvaMath";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: "",
      prevInput: "",
      input: "",
      pi: "3.142",
      angleMode: "DEG",
      shift: 0,
      scieMode: 0,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleOpClick = this.handleOpClick.bind(this);
    // this.handleShift = this.handleShift.bind(this);
  }

  handleInput = (event) => {
    let inputChange = this.state.input + event.target.innerText;
    this.setState({
      input: inputChange,
    });
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

  handleShift = (e) => {
    let funcs = document.getElementsByClassName("topFuncs");
    let count = funcs.length;

    let btnFuncs = document.getElementsByClassName("funcBtn");

    if (this.state.shift) {
      e.target.style.borderBottom = "none";
      this.setState({
        shift: 0,
      });
      while (count) {
        funcs[count - 1].style.opacity = "30%";
        btnFuncs[count - 1].style.opacity = "100%";
        count--;
      }
    } else {
      while (count) {
        funcs[count - 1].style.opacity = "100%";
        btnFuncs[count - 1].style.opacity = "30%";
        count--;
      }
      e.target.style.borderBottom = "solid rgb(0, 102, 255) 5px";
      this.setState({
        shift: 1,
      });
    }
  };

  handleTrig = (e) => {
    let funcType;
    funcType = e.target.textContent.slice(0, e.target.textContent.length - 2);

    if (this.state.shift) {
      switch (funcType) {
        case "sin":
          funcType = "asin";
          break;
        case "cos":
          funcType = "acos";
          break;
        case "tan":
          funcType = "atan";
          break;
        default:
          break;
      }
    }

    let newValue;
    switch (funcType) {
      case "sin":
        newValue =
          this.state.angleMode === "DEG"
            ? Math.sin(this.toRad(Number(this.state.input)))
            : Math.sin(Number(this.state.input));
        break;
      case "asin":
        newValue =
          this.state.angleMode === "DEG"
            ? this.toDeg(Math.asin(Number(this.state.input)))
            : Math.asin(Number(this.state.input));
        break;
      case "cos":
        newValue =
          this.state.angleMode === "DEG"
            ? Math.cos(this.toRad(Number(this.state.input))).toPrecision(1)
            : Math.cos(Number(this.state.input)).toPrecision(1);
        break;
      case "acos":
        newValue =
          this.state.angleMode === "DEG"
            ? this.toDeg(Math.acos(Number(this.state.input)))
            : Math.acos(Number(this.state.input));
        break;
      case "tan":
        newValue =
          this.state.angleMode === "DEG"
            ? Math.tan(this.toRad(Number(this.state.input)))
            : Math.tan(Number(this.state.input));
        break;
      case "atan":
        newValue =
          this.state.angleMode === "DEG"
            ? this.toDeg(Math.atan(Number(this.state.input)))
            : Math.atan(Number(this.state.input));
        break;
      default:
        newValue = this.state.input;
        break;
    }
    this.setState({
      input: newValue,
    });
  };

  handlePiClick = () => {
    this.setState({
      input: 3.142,
    });
  };

  handleRoots = () => {
    if (this.state.shift) {
      this.setState({
        input: Math.cbrt(this.state.input),
      });
    } else {
      this.setState({
        input: Math.sqrt(this.state.input),
      });
    }
  };

  handlePower = () => {
    if (this.state.shift) {
      this.setState({
        input: Math.pow(this.state.input, 3),
      });
    } else {
      this.setState({
        input: Math.pow(this.state.input, 2),
      });
    }
  };

  handleLog = () => {
    if (this.state.shift) {
      this.setState({
        input: Math.log2(this.state.input),
      });
    } else {
      this.setState({
        input: Math.log(this.state.input),
      });
    }
  };

  handleMod = () => {
    if (this.state.shift) {
      this.setState({
        input: Math.log10(this.state.input),
      });
    } else {
      this.setState({
        input: this.state.input / 100,
      });
    }
  };

  handleFactorial = (num) => {
    let fact = 1;

    while (num) {
      fact *= num;
      num--;
    }

    return fact;
  };

  handleInverse = () => {
    if (this.state.shift) {
      this.setState({
        input: this.handleFactorial(this.state.input),
      });
    } else {
      this.setState({
        input: 1 / this.state.input,
      });
    }
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
        input: `${this.makeOp(this.state.operation)}`,
        prevInput: ``,
      });
    }
  };

  toRad = (deg) => {
    return deg / ((180 * 7) / 22);
  };

  toDeg = (rad) => {
    return rad / (22 / (7 * 180));
  };

  handleScie = (func, e) => {
    switch (func) {
      case 1:
        return this.handleLog();
      case 2:
        return this.handleRoots();
      case 3:
        return this.handlePower();
      case 4:
        return this.handleMod();
      case 5:
        return this.handleInverse(e);
      default:
        break;
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

  handleScieMode = () => {
    let scieFuncs = document.getElementsByClassName("mathFuncs");
    let scieModeBtn = document.getElementsByClassName("Scie");

    if (!this.state.scieMode) {
      scieModeBtn[0].style.borderBottom = "solid rgb(0, 102, 255) 3px";
      scieFuncs[0].style.display = "grid";
      this.setState({
        scieMode: 1,
      });
    } else {
      scieModeBtn[0].style.borderBottom = "none";
      scieFuncs[0].style.display = "none";
      this.setState({
        scieMode: 0,
      });
    }
  };

  render() {
    return (
      <>
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
          handleScieMode={this.handleScieMode}
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
        <AdvaMath
          handleTrig={this.handleTrig}
          handleShift={this.handleShift}
          handleScie={this.handleScie}
        />
      </>
    );
  }
}

export default Body;
