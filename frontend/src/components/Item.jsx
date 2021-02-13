import React, { useState, useContext } from "react";
import { itemContext } from "./context";
import ItemContent from "./ItemContent";
import ItemEdit from "./ItemEdit";
import ItemEditButtons from "./ItemButtons.jsx";
import AlertDelete from "./AlertDelete.jsx";
import pin1 from "../images/pin-lila.png";
import pin2 from "../images/pin-red.png";
import pin3 from "../images/pin-yellow.png";
import pin4 from "../images/pin-green.png";

export default function Item() {
  const levels = [
    "Yesterday was late",
    "It is time to look at it ;)",
    "No rush......",
    "Too early to just think about it",
  ];
  const [toDelete, setToDelete] = useState(false);
  const [toEdit, setToEdit] = useState(false);

  const task = useContext(itemContext);

  let pin;

  let choosePin = (number) => {
    switch (number) {
      case 1:
        pin = pin1;
        break;
      case 2:
        pin = pin2;
        break;
      case 3:
        pin = pin3;
        break;
      default:
        pin = pin4;
        break;
    }
  };

  choosePin(parseInt(task.importance));

  return (
    <article className="border card-white">
      <figure>
        <img className="img-smaller" src={pin} alt="pin" />
      </figure>
      {toEdit ? (
        <ItemEdit levels={levels} setToEdit={setToEdit} />
      ) : (
        <ItemContent levels={levels} />
      )}
      {!toDelete && !toEdit ? (
        <ItemEditButtons setToDelete={setToDelete} setToEdit={setToEdit} />
      ) : toDelete ? (
        <AlertDelete setToDelete={setToDelete} />
      ) : null}
    </article>
  );
}
