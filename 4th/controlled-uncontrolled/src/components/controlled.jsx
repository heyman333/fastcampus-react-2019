import React, { Component } from "react";

export default class Controlled extends Component {
  state = {
    value: "초기값",
  };

  _onChange = e => {
    const value = e.target.value.toUpperCase();
    this.setState({ value });
  };

  _click = () => {
    console.log(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        controlled
        <input value={value} onChange={this._onChange} />
        <button onClick={this._click}>버튼</button>
      </div>
    );
  }
}
