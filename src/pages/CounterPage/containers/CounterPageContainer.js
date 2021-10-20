import React, { Component } from "react";
import Counter from "../components/Counter";

class CounterPageContainer extends Component {
  state = {
    countValue: 0,
    parityType: "Введено чётное число",
  };

  handleIncrement = () => {
    this.setState({ ...this.state, countValue: this.state.countValue + 1 });
  };

  handleDecrement = () => {
    this.setState({ ...this.state, countValue: this.state.countValue - 1 });
    this.state.countValue - 1 < 0 &&
      this.setState({ ...this.state, countValue: 0 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.countValue !== this.state.countValue) {
      this.state.countValue % 2 === 0
        ? this.setState({ ...this.state, parityType: "Введено чётное число" })
        : this.setState({
            ...this.state,
            parityType: "Введено нечётное число",
          });
    }
  }

  handleReset = () => {
    this.setState({ countValue: 0, parityType: "Введено чётное число" });
  };

  render() {
    return (
      <Counter
        countValue={this.state.countValue}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}
        parityType={this.state.parityType}
      />
    );
  }
}

export default CounterPageContainer;
