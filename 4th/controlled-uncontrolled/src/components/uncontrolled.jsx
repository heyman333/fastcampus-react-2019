import React, { Component } from "react";

export default class UnControlled extends Component {
  input = React.createRef();

  onClick = () => {
    console.log(this.input.current.value);
  };

  render() {
    return (
      <div>
        UnCuntrolled
        <input ref={this.input} defaultValue="초기값" />
        <button onClick={this.onClick}>발사버튼</button>
      </div>
    );
  }
}
