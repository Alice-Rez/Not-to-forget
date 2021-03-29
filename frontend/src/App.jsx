import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { myContext } from "./context.js";
import Header from "./components/Header";
import AddToDo from "./components/AddToDo";
import ListToDo from "./components/ListToDo";
import Search from "./components/Search";
import Home from "./components/Home";

export default function App() {
  const [tasks, setTasks] = useState([
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
  ]);

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    let id = 0;
    for (let item of tasks) {
      if (item.id >= id) {
        id = item.id;
      }
    }
    setTasks([...tasks, { ...task, id: id + 1 }]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
  };

  const checkTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((item) => {
        if (item.id === id) {
          if (item.finished) {
            return { ...item, finished: !item.finished };
          } else {
            return { ...item, finished: true };
          }
        }
        return item;
      })
    );
  };

  const editTask = (id, change) => {
    setTasks((prevTasks) =>
      prevTasks.map((item, index, array) => {
        if (item.id === id) {
          return (array[index] = change);
        }
        return item;
      })
    );
  };

  return (
    <myContext.Provider
      value={{
        deleteTask,
        checkTask,
        editTask,
        addTask,
        tasks,
        setTasks,
      }}
    >
      <Router>
        <Header />
        <main className="p-3">
          <Switch>
            <Route path="/add">
              <AddToDo addTask={addTask} />
            </Route>
            <Route path="/list" exact component={ListToDo} />
            <Route path="/search">
              <Search tasks={tasks} />
            </Route>
            <Route path="/" exact component={Home} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
      </Router>
    </myContext.Provider>
  );
}
