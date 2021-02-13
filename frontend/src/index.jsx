import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "./styles/Header.css";
import "./styles/Navigation.css";
import "./styles/AddToDo.css";
import "./styles/Search.css";
import "./styles/ListToDo.css";
import "./styles/Item.css";
import "./styles/ItemEditButtons.css";
import "./styles/AlertDelete.css";
import "./styles/Help.css";

ReactDOM.render(<App />, document.getElementById("root"));
