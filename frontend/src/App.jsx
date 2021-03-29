import React, { useEffect, useState } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import { myContext } from "./context.js";
import Header from "./components/Header";
import AddToDo from "./components/AddToDo";
import ListToDo from "./components/ListToDo";
import Search from "./components/Search";
import Home from "./components/Home";

export default function App() {
  const [tasks, setTasks] = useState([]);

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
      <HashRouter>
        <Header />
        <main className="p-3">
          <Route path="/add" exact component={AddToDo} />
          <Route path="/list" exact component={ListToDo} />
          <Route path="/search" exact component={Search} />
          <Route path="/" exact component={Home} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </main>
      </HashRouter>
    </myContext.Provider>
  );
}
