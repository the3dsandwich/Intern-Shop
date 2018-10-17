import React, { Component } from "react";
import firebase from "firebase";
import firebaseConfig from "./key/key";
import style from "./Style";
import InternListing from "./components/InternListing";
import LoadingScreen from "./components/LoadingScreen";
import Title from "./components/Title";
import SideInfo from "./components/SideInfo";
import UpdateContent from "./components/UpdateContent/UpdateContent";

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

  render() {
    return (
      <div style={style.div}>
        <Title />
        <SideInfo />

        {this.state.InternInfo ? (
          this.state.InternInfo.map(listed => (
            <InternListing InternInfo={this.state.InternInfo} listed={listed} />
          ))
        ) : (
          <LoadingScreen />
        )}

        <UpdateContent database={this.database} />
      </div>
    );
  }
}

export default App;
