import React from "react";
import ListItem from "../ListItem";

export default function List({ todoState, removeNote, doneNote }) {
  return (
    <div>
      {todoState.map(el => (
        <ListItem
          key={el.id}
          item={el}
          removeNote={removeNote}
          doneNote={doneNote}
        />
      ))}
    </div>
  );
}
