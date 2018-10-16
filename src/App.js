import React, { Component } from "react";
import InternToBePushed from "./InternshipCompanies.json";
import firebase from "firebase";
import firebaseConfig from "./key/key";
import style from "./Style";

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
          <h2 style={style.license}>
            Copyright 2018 (c) under MIT
            <br />
            Shann Wei Yeh & Ian Y.E. Pan
          </h2>
        </div>
        {this.state.InternInfo ? (
          this.state.InternInfo.map(listed => (
            <div>
              <p style={style.item}>
                <h2 style={style.index}>
                  {this.state.InternInfo.indexOf(listed) + 1 + ". "}
                </h2>
                <h2 style={style.h2}>{listed.company}</h2>
                <br />
                <br />
                <a href={listed.link} style={style.a} target="_blank">
                  {listed.name}
                </a>
                <br />
                <br />
                <i style={style.italic}>{listed.location}</i>
                <br />
                <br />
                {listed.intro}
              </p>
            </div>
          ))
        ) : (
          <div>
            <h1 style={style.loading}>Loading... please wait.</h1>
          </div>
        )}
        <div style={style.buttondiv}>
          <button id="update" onClick={this.handleClick} style={style.button}>
            Update me!
          </button>
        </div>
      </div>
    );
  }
}

export default App;
