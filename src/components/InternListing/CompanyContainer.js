import React, { Component } from "react";
import ListingView from "./ListingView";

export default class CompanyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { CompanyOpened: true };
  }

  handleClick = () => {
    if (this.state.CompanyOpened) {
      this.setState({ CompanyOpened: false });
    } else {
      this.setState({ CompanyOpened: true });
    }
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.props.company[0]}</h1>
        {this.state.CompanyOpened
          ? this.props.company[1].map(listed => (
              <ListingView
                key={listed.name}
                InternInfo={this.props.company[1]}
                listed={listed}
              />
            ))
          : null}
      </div>
    );
  }
}
