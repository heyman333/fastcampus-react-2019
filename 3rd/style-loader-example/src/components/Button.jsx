import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

console.log(classNames("button", "loading")); // "button loading"

const cx = classNames.bind(styles);

export default class Button extends React.Component {
  state = {
    loading: false,
  };

  startLoading = () => {
    console.log("start");
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const { loading } = this.state;
    return (
      <button
        className={cx("button", { loading })}
        {...this.props}
        onClick={this.startLoading}
      />
    );
  }
}
