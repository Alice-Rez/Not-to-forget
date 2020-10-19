import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div className="container text-center my-3">
        <button className="btn btn-success rounded-circle add">
          <span className="text-light plus">&#x002B;</span>
        </button>
      </div>
    );
  }
}
