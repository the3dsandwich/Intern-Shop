import React, { Component } from "react";
import InternToBePushed from "./InternshipCompanies.json";
import firebase from "firebase";
import firebaseConfig from "./key/key";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { InternInfo: null };
    this.database = firebase.initializeApp(firebaseConfig).database();
    this.database
      .ref("/")
      .once("value")
      .then(snap => this.setState({ InternInfo: snap.val() }));
    this.database
      .ref("/")
      .on("value", snap => this.setState({ InternInfo: snap.val() }));
  }

  handleClick = e => {
    if (e.target.id === "update") {
      this.database.ref("/").set(InternToBePushed);
    }
  };

  render() {
    return (
      <div style={style.div}>
        <div>
          <h1 style={style.title}>InternShop 2018-2019</h1>
        </div>
        <div>
          <h2 style={style.license}>Copyright 2018 (c) under MIT<br/>Shann Wei Yeh & Ian Y.E. Pan</h2>
        </div>
        {this.state.InternInfo
          ? this.state.InternInfo.map(listed => (
              <div>
                <p style={style.item}>
                  <h2 style={style.h2}>
                    {this.state.InternInfo.indexOf(listed) + 1 + ". "}
                    {listed.company}
                  </h2>
                  <a href={listed.link} style={style.a} target="_blank">
                    {listed.name}
                  </a>
                  <br />
                  <br />
                  <i style={style.italic}>{listed.location}</i>
                  <br />
                  {listed.intro}
                </p>
              </div>
            ))
          :
         <div>
         <h1 style={style.loading}>Loading... please wait.</h1>
         </div>
        }
        <div style={style.buttondiv}>
        <button id="update" onClick={this.handleClick} style={style.button}>
          Update me!
        </button>
        </div>
      </div>
    );
  }
}

const style = {
  title: {
    textAlign: "center",
    color: "#81BCBC"
  },
  license: {
fontSize: "1.0em",
    textAlign: "center",
    color: "#fffafa"
  },
  div: {
    fontFamily: "Monaco",
    backgroundColor: "#2C3339",
    paddingRight: "9%",
    paddingLeft: "9%",
    paddingTop: "3em",
    paddingBottom: "3em",
    margin: "-1em"
  },
  italic: {
    color: "#AFEDEB",
    fontWeight: "bold"
  },
  item: {
    backgroundColor: "#455058",
    color: "#fffafa",
    margin: "2em",
    padding: "2em",
    paddingTop: "0.5em",
    marginBottom: "2.5em"
  },
  a: {
    fontSize: "1.3em",
    margin: 0,
    padding: 0,
    color: "#7CACD5"
  },
  inner: {
    borderRadius: "10px"
  },
  loading: {
    fontSize: "2em",
    color: "#fffafa",
    fontFamily: "Monaco",
    textAlign: "center"
  },
  button: {
    borderRadius: "0.3em",
    borderWidth: "0.1em",
    borderColor: "#7EAB93",
    fontSize: "1.5em",
    backgroundColor: "#1e1e1e",
    color: "#fffafa",
    fontFamily: "Monaco",
  },
  buttondiv: {
    textAlign: "center"
  }

};

export default App;
