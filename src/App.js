import React, { Component } from "react";
import InternInfo from "./InternshipCompanies.json";

class App extends Component {
  render() {
    return (
      <div style={style.div}>
        {InternInfo.map(listed => (
          <div>
            <p style={style.item}>
              <h2 style={style.h2}>
                {InternInfo.indexOf(listed) + 1 + ". "}
                {listed.company}
              </h2>
              <a href={listed.link} style={style.a} target="_blank">
                {listed.name}
              </a>
              <br />
              <br />
              <i style={style.italic}>{listed.location}</i>
              <br/>{listed.intro}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

const style = {
  div: {
    fontFamily: "Monaco",
    backgroundColor: "#2C3339",
    paddingRight: "15em",
    paddingLeft: "15em",
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
  }
};

export default App;
