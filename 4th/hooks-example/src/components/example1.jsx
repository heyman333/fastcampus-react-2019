import React, { Component } from "react";

class Example1 extends Component {
  state = {
    count: 0,
  };

  onClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        {count}
        <button onClick={this.onClick} />
      </div>
    );
  }
}

export default Example1;
