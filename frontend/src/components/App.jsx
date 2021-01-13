import React, { Component } from "react";
import Axios from "axios";
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
      // {
      //   title: "learn React",
      //   deadline: "2021-01-21",
      //   importance: "1",
      //   description:
      //     "Learn React really in deep during my dci course, using FEM videos and Udemy course from Colt Steele",
      //   id: 1,
      // },
      // {
      //   title: "silvester",
      //   deadline: "2020-12-31",
      //   importance: "4",
      //   description: "Finally end of this horror year!!!!",
      //   id: 2,
      // },
      // {
      //   title: "Christmas",
      //   deadline: "2020-12-24",
      //   importance: "3",
      //   description:
      //     "Although there is covid, still celebrate Christmas at least a bit!",
      //   id: 3,
      // },
      // {
      //   title: "final presentation",
      //   deadline: "2021-03-23",
      //   importance: "2",
      //   description: "Presentation of our final projects. last day in DCI.",
      //   id: 4,
      // },
      // {
      //   title: "Halloween",
      //   deadline: "2020-10-31",
      //   importance: "4",
      //   description: "Definitely do not celebrate Halloween this year!",
      //   finished: true,
      //   id: 5,
      // },
    ],
    user: "demo",
  };

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = () => {
    Axios({
      method: "GET",
      url: `/tasks/${this.state.user}/all`,
    })
      .then((res) => {
        console.log(res);
        this.setState({ tasks: res.data });
      })
      .catch((err) => console.log(err));
  };

  addTask = (task) => {
    let id = 0;
    for (let item of this.state.tasks) {
      if (item.index >= id) {
        id = item.index;
      }
    }
    let data = { ...task, index: id + 1, user: this.state.user };
    Axios({
      method: "POST",
      url: "/tasks/add",
      data: data,
    })
      .then((res) => {
        console.log(res);
        console.log("task was added");
        if (res.data) {
          this.loadTasks();
        }
      })
      .catch((err) => console.log(err));
  };

  deleteTask = (taskId) => {
    let data = { uuid: taskId };
    Axios({
      method: "DELETE",
      url: "/tasks/delete",
      data: data,
    })
      .then((res) => {
        console.log(res);
        console.log("task was deleted");
        if (res.data) {
          this.loadTasks();
        }
      })
      .catch((err) => console.log(err));
    // let result = this.state.tasks.filter((item) => item._id !== taskId);
    // this.setState({ tasks: result });
    // result = [];
  };

  checkTask = (taskId) => {
    let data = { uuid: taskId };
    Axios({
      method: "PUT",
      url: "/tasks/check",
      data: data,
    })
      .then((res) => {
        console.log(res);
        console.log("task was (un)checked");
        if (res.data) {
          this.loadTasks();
        }
      })
      .catch((err) => console.log(err));
    // let result = this.state.tasks.map((item) => {
    //   if (item._id === taskId) {
    //     if (item.finished) {
    //       return { ...item, finished: !item.finished };
    //     } else {
    //       return { ...item, finished: true };
    //     }
    //   }
    //   return item;
    // });
    // this.setState({ tasks: result });
    // result = [];
  };

  editTask = (taskId, change) => {
    let result = this.state.tasks.map((item, index, array) => {
      if (item._id === taskId) {
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
