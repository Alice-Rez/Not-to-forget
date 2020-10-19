import React, { Component } from "react";
import Navigation from "./Navigation";

export default class Header extends Component {
  render() {
    return (
      <header className="pt-3">
        <h1>Not To Forget</h1>
        <Navigation
          showAdd={this.props.showAdd}
          formVisible={this.props.formVisible}
        />
      </header>
    );
  }
}
