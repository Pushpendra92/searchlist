import React, { Component } from "react";
import SearchInput from "./SearchInput";
import List from "./List";

export default class App extends Component {
  state = {
    search: ""
  };

  callbackFunction = childData => {
    this.setState({ search: childData });
  };
  render() {
    return (
      <div className="container">
        <h1>Search Bar</h1>
        <SearchInput parentCallback={this.callbackFunction} />
        <List name={this.state.search} />
      </div>
    );
  }
}
