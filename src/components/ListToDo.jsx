import React, { Component } from "react";

export default class ListToDo extends Component {
  render() {
    return (
      <div className="container lead text-center">
        Here will be shown the list of to-dos
        <span role="img" aria-labelledby="winking-face">
          😉
        </span>
      </div>
    );
  }
}
