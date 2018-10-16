import React, { Component } from "react";
import InternInfo from "./InternshipCompanies.json";

class App extends Component {
  render() {
    return (
      <div style={style.div}>
        {InternInfo.map(listed => (
          <div>
            <p
              style={style.item}
              onClick={() => window.open(listed.link, "_blank")}
              >
              <h3 style={style.h3}>{listed.name}</h3>
              <i>{listed.company}:</i> {listed.intro}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

const style = {
  div: { fontFamily: "sans-serif", backgroundColor: "#2C3339",
         paddingRight: "15em", paddingLeft: "15em", paddingTop: "3em", margin: "-1em"},
  item: {
    backgroundColor: "#455058",
    color: "#fffafa",
    margin: "2em",
    padding: "2em",
    marginBottom: "2.5em"
  },
  h3: {
    fontSize: "1.3em",
    margin: 0,
    padding: 0,
    color: "#7EA7CA"
  },
  inner: {
    borderRadius: "10px"
  }
};

export default App;
