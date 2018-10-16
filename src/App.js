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
            MIT License
            <br />
            Copyright (c) 2018 Sann Wei Yeh & Ian Y.E. Pan
          </h2>
        </div>
        <div style={style.flt}>
          This website is written in the hope to facilitate university students when searching for jobs in the US (mostly on the west coast, California), particularly in fields related to Computer Science and Software Engineering.<br/><br/><br/><hr/><br/><br/>
          The MIT License (MIT)<br/><br/>
Copyright © 2018 Shan Wei Yeh & Ian Y.E. Pan<br/><br/>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: <br/>
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br/><br/>

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
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
