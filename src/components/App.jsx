import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { myContext } from "./context.jsx";
import Header from "./Header";
import AddToDo from "./AddToDo";
import ListToDo from "./ListToDo";
import Search from "./Search";
import Help from "./Help";

export default class App extends Component {
  state = {
    tasks: [
      {
        title: "learn React",
        deadline: "2021-01-21",
        importance: "1",
        description:
          "Learn React really in deep during my dci course, using FEM videos and Udemy course from Colt Steele",
        id: 1,
      },
      {
        title: "silvester",
        deadline: "2020-12-31",
        importance: "4",
        description: "Finally end of this horror year!!!!",
        id: 2,
      },
      {
        title: "Christmas",
        deadline: "2020-12-24",
        importance: "3",
        description:
          "Although there is covid, still celebrate Christmas at least a bit!",
        id: 3,
      },
      {
        title: "final presentation",
        deadline: "2021-03-23",
        importance: "2",
        description: "Presentation of our final projects. last day in DCI.",
        id: 4,
      },
      {
        title: "Halloween",
        deadline: "2020-10-31",
        importance: "4",
        description: "Definitely do not celebrate Halloween this year!",
        finished: true,
        id: 5,
      },
    ],
  };

  addTask = (task) => {
    let id;
    if (this.state.tasks.length < 1) {
      id = 1;
    } else {
      id = this.state.tasks[this.state.tasks.length - 1].id + 1;
    }
    this.setState({
      tasks: [...this.state.tasks, { ...task, id: id }],
    });
  };

  deleteTask = (task) => {
    let result = this.state.tasks.filter((item) => item.title !== task);
    this.setState({ tasks: result });
    result = [];
  };

  checkTask = (task) => {
    let result = this.state.tasks.map((item) => {
      if (item.title === task) {
        if (item.finished) {
          return { ...item, finished: !item.finished };
        } else {
          return { ...item, finished: true };
        }
      }
      return item;
    });
    this.setState({ tasks: result });
    result = [];
  };

  editTask = (task, change) => {
    let result = this.state.tasks.map((item, index, array) => {
      if (item.id === task) {
        return (array[index] = change);
      }
      return item;
    });
    this.setState({ tasks: result });
    result = [];
  };

  render() {
    return (
      <myContext.Provider
        value={{
          deleteTask: this.deleteTask,
          checkTask: this.checkTask,
          editTask: this.editTask,
        }}
      >
        <Router>
          <Header />
          <main className="p-3">
            <Switch>
              <Route path="/add">
                <AddToDo
                  addTask={this.addTask}
                  changeStyle={this.changeStyle}
                />
              </Route>
              <Route path="/list">
                <ListToDo tasks={this.state.tasks} />
              </Route>
              <Route path="/search">
                <Search tasks={this.state.tasks} />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
            </Switch>
          </main>
        </Router>
      </myContext.Provider>
    );
  }
}
