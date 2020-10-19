import React, { Component } from "react";

export default class AddToDo extends Component {
  state = {
    title: "",
    deadline: "",
  };

  getValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form
        action=""
        className="container text-center border py-3 d-flex flex-column align-items-center col-sm-5 bg-white"
      >
        <h2>Add new item</h2>
        <div className="form-group col-sm-10 row">
          <label htmlFor="title" className="col-sm-2 col-form-label ">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control col-sm-10"
            onInput={this.getValue}
          />
        </div>
        <div className="form-group col-sm-10 row">
          <label htmlFor="deadline" className="col-sm-2 col-form-label ">
            Deadline
          </label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            className="form-control col-sm-10"
            onInput={this.getValue}
          />
        </div>
        <button
          type="submit"
          className="btn btn-custom col-sm-4"
          onClick={(e) => {
            e.preventDefault();
            this.props.addTask({
              title: this.state.title,
              deadline: this.state.deadline,
            });
          }}
        >
          Add
        </button>
      </form>
    );
  }
}
