import React, { Component } from "react";
import updateDatabase from "./ListingController";
import firebase from "../../firebase/firebase";
import ListingLoading from "./ListingLoading";
import CompanyContainer from "./CompanyContainer";

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
        <CompanyContainer key={company} company={company} />
      ));
    } else {
      return <ListingLoading />;
    }
  }
}
