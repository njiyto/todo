import React from "react";
import Todo from "../../components/Todo";
import "./style.css";

export default class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Todo />
      </div>
    );
  }
}
