import React, { Component } from "react";
import updateDatabase from "./ListingController";
import firebase from "../../firebase/firebase";
import ListingLoading from "./ListingLoading";
import ListingView from "./ListingView";

export default class ListingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { InternInfo: null };
    firebase
      .ref("/")
      .once("value")
      .then(snap => this.setState({ InternInfo: updateDatabase(snap.val()) }));
    firebase
      .ref("/")
      .on("value", snap =>
        this.setState({ InternInfo: updateDatabase(snap.val()) })
      );
  }

  render() {
    if (this.state.InternInfo) {
      return this.state.InternInfo.map(company => (
        <div key={company[0]}>
          <h1>{company[0]}</h1>
          {company[1].map(listed => (
            <ListingView
              key={listed.name}
              InternInfo={company[1]}
              listed={listed}
            />
          ))}
        </div>
      ));
    } else {
      return <ListingLoading />;
    }
  }
}
