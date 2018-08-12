import React from "react";
import "./style.css";

export default class ListItem extends React.Component {
  render() {
    let styleComplete = {};
    if (this.props.item.complete) {
      styleComplete = { textDecoration: "line-through" };
    } else {
      styleComplete = {};
    }
    return (
      <div className="list-item__wrapper">
        <div
          className="list-item__note"
          onClick={() => this.props.doneNote(this.props.item.id)}
          style={styleComplete}
        >
          {this.props.item.text}
        </div>
        <div
          className="list-item__remove"
          onClick={() => this.props.removeNote(this.props.item.id)}
        >
          x
        </div>
      </div>
    );
  }
}
