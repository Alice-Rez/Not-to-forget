import React, { Component } from "react";

export default class AddToDo extends Component {
  state = {
    task: {},
  };

  getValue = (e) => {
    this.setState({
      task: { ...this.state.task, [e.target.name]: e.target.value },
    });
  };

  componentDidMount() {
    this.props.changeStyle("styleAddToDo", "opacity", "1");
  }

  render() {
    return (
      <section className=" rounded container my-5 text-center bg-white py-5 col-xl-5">
        <h2 className="pb-3">Add new item</h2>
        <form
          style={this.props.myStyle}
          action=""
          className="text-center  py-5 d-flex flex-column align-items-center col-sm-12 mx-auto"
        >
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
          <div className="form-group col-sm-10 row">
            <label htmlFor="importance" className="col-sm-2 col-form-label ">
              Level
            </label>
            <select
              name="importance"
              id="importance"
              className="form-control col-sm-10"
              onChange={this.getValue}
            >
              <option value="">----- Please choose one option -----</option>
              <option value="Yesterday was late!">Yesterday was late!</option>
              <option value="It is time to look at it">
                It is time to look at it
              </option>
              <option value="What you can do today, you can also do tomorrow">
                What you can do today, you can also do tomorrow
              </option>
            </select>
          </div>
          <div className="form-group col-sm-10 row">
            <label htmlFor="description" className="col-sm-2 col-form-label ">
              Details
            </label>
            <textarea
              cols="30"
              rows="3"
              name="description"
              id="description"
              className="form-control col-sm-10"
              onInput={this.getValue}
            />
          </div>
          <button
            type="submit"
            className="btn btn-custom col-sm-4"
            onClick={(e) => {
              e.preventDefault();
              this.props.addTask(this.state.task);
            }}
          >
            Add
          </button>
        </form>
      </section>
    );
  }
}
