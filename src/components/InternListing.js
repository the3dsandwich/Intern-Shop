import React, { Component } from "react";

export default class Listing extends Component {
  render() {
    return (
      <div>
        <p style={style.item}>
          <h2 style={style.index}>
            {this.props.InternInfo.indexOf(this.props.listed) + 1 + ". "}
          </h2>
          <h2 style={style.h2}>{this.props.listed.company}</h2>
          <br />
          <br />
          <a href={this.props.listed.link} style={style.a} target="_blank">
            {this.props.listed.name}
          </a>
          <br />
          <br />
          <i style={style.italic}>{this.props.listed.location}</i>
          <br />
          <br />
          {this.props.listed.intro}
        </p>
      </div>
    );
  }
}

const style = {
  item: {
    backgroundColor: "#455058",
    color: "#eee",
    margin: "2em",
    padding: "2em",
    paddingTop: "0.5em",
    marginRight: "25%",
    marginBottom: "2.5em"
  },
  index: {
    color: "#9BA7B3",
    display: "inline"
  },
  h2: {
    display: "inline",
    color: "#fffafa"
  },
  a: {
    fontSize: "1.3em",
    margin: 0,
    padding: 0,
    color: "#9BD0F9",
    fontWeight: "bold"
  },
  italic: {
    color: "#97CDCB"
  }
};
