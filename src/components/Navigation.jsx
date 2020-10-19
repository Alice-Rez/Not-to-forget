import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div className="container text-center my-3">
        <button
          className="btn btn-custom rounded-circle add"
          onClick={() => {
            if (!this.props.formVisible) {
              this.props.showAdd(true);
            } else {
              this.props.showAdd(false);
            }
          }}
        >
          <span className="text-light plus">&#x002B;</span>
        </button>
      </div>
    );
  }
}
