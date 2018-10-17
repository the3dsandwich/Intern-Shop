import React, { Component } from "react";

export default class LoadingScreen extends Component {
  render() {
    return (
      <div>
        <h1 style={style.loading}>Loading... please wait.</h1>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br />
      </div>
    );
  }
}

const style = {
  loading: {
    fontSize: "2em",
    color: "#B9C7D5",
    fontFamily: "Monaco",
    textAlign: "center"
  }
};
