import React, { Component } from "react";
// import "../styles/Header.css";
import Navigation from "./Navigation";

export default class Header extends Component {
  render() {
    return (
      <header className="pt-3">
        <div>
          <h1>Not To Forget</h1>
          {/* <h2>Clever managment of your To-dos</h2> */}
        </div>
        <Navigation
          showAdd={this.props.showAdd}
          formVisible={this.props.formVisible}
        />
      </header>
    );
  }
}
