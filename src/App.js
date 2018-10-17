import React, { Component } from "react";
import style from "./Style";
import Title from "./components/Title";
import SideInfo from "./components/SideInfo";
import ListingContainer from "./components/InternListing/ListingContainer";
// import UpdateContent from "./components/UpdateContent/UpdateContent";
// import database from "./firebase/firebase";

class App extends Component {
  render() {
    return (
      <div style={style.div}>
        <Title />
        <SideInfo />
        <ListingContainer />
        {/* <UpdateContent database={database} /> */}
      </div>
    );
  }
}

export default App;
