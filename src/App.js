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
  div: { fontFamily: "sans-serif", backgroundColor: "#777799", padding: "1em" },
  item: {
    backgroundColor: "#BBBBFF",
    margin: "1em",
    padding: "1em",
    marginBottom: "1.5em"
  },
  h3: {
    fontSize: "1.5em",
    margin: 0,
    padding: 0
  }
};

export default App;
