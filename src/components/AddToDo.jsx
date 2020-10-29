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
      <section className="section-main">
        <form
          style={this.props.myStyle}
          action=""
          className="text-center d-flex flex-column align-items-center col-sm-12 mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addTask(this.state.task);
            e.target.reset();
          }}
        >
          <div className="form-group col-sm-10 row">
            <label htmlFor="title" className="col-sm-2 col-form-label ">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
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
              required
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
              required
              className="form-control col-sm-10"
              onChange={this.getValue}
            >
              <option value="">----- Choose one -----</option>
              <option value="1">Yesterday was late!</option>
              <option value="2">It is time to look at it</option>
              <option value="3">No rush......</option>
              <option value="4">Too early to just think about it</option>
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
          <button type="submit" className="btn btn-add btn-lg col-sm-3">
            Add new item
          </button>
        </form>
      </section>
    );
  }
}
