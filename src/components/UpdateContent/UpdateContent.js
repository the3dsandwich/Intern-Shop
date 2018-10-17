import React, { Component } from "react";
import firebase from "firebase";
import InternToBePushed from "./InternshipCompanies.json";

class App extends Component {
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
      <div style={style.buttondiv}>
        <button id="update" onClick={this.handleClick} style={style.button}>
          Update Content
        </button>
      </div>
    );
  }
}

const style = {
  button: {
    borderRadius: "0.3em",
    borderWidth: "0.1em",
    borderColor: "#7EAB93",
    fontSize: "1.5em",
    backgroundColor: "#1e1e1e",
    color: "#fffafa",
    fontFamily: "Monaco"
  },
  buttondiv: {
    textAlign: "center"
  }
};

export default App;
