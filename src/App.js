import React, { Component } from "react";
import style from "./Style";
import Title from "./components/Title";
import SideInfo from "./components/SideInfo";
import ListingContainer from "./components/InternListing/ListingContainer";
import UpdateContent from "./components/UpdateContent/UpdateContent";
import database from "./firebase/firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  hancleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div style={style.div}>
        <Title />
        <div id="sideInfo" onClick={this.hancleClick}>
          <SideInfo />
        </div>
        <ListingContainer />
        {this.state.clicks > 10 ? <UpdateContent database={database} /> : null}
      </div>
    );
  }
}

export default App;
