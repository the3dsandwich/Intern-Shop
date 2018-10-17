import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 style={style.title}>InternShop 2018-2019</h1>
        </div>
        <div>
          <h2 style={style.license}>
            MIT License
            <br />
            Copyright (c) 2018 Shann Wei Yeh & Ian Y.E. Pan
          </h2>
        </div>
      </div>
    );
  }
}

const style = {
  title: {
    textAlign: "center",
    color: "#fffafa"
  },
  license: {
    fontSize: "1.0em",
    textAlign: "center",
    color: "#5B6B76"
  }
};
