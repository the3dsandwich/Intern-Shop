import React, { Component } from "react";
import database from "./ListingController";
import ListingLoading from "./ListingLoading";
import ListingView from "./ListingView";

export default class ListingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { InternInfo: null };
    this.database = database;
    this.database
      .ref("/")
      .once("value")
      .then(snap => this.setState({ InternInfo: snap.val() }));
    this.database
      .ref("/")
      .on("value", snap => this.setState({ InternInfo: snap.val() }));
  }

  render() {
    if (this.state.InternInfo) {
      return this.state.InternInfo.map(company => (
        <div>
          <h1>{company.companyName}</h1>
          {company.listing.map(listed => (
            <ListingView InternInfo={company.listing} listed={listed} />
          ))}
        </div>
      ));
    } else {
      return <ListingLoading />;
    }
  }
}
