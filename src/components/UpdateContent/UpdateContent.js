import React, { Component } from "react";
import InternToBePushed from "./InternshipCompanies.json";

export default class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.database = this.props.database;
  }

  handleClick = e => {
    if (e.target.id === "update") {
      this.database.ref("/").set(InternToBePushed);
    }
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <button
          style={{
            borderRadius: "0.3em",
            borderWidth: "0.1em",
            borderColor: "#7EAB93",
            fontSize: "1.5em",
            backgroundColor: "#1e1e1e",
            color: "#fffafa",
            fontFamily: "Monaco"
          }}
          id="update"
          onClick={this.handleClick}
        >
          Update Content
        </button>
      </div>
    );
  }
}
