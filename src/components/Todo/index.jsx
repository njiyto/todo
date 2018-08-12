import React from "react";
import { connect } from "react-redux";

import AddNote from "../AddNote";
import List from "../List";

class Todo extends React.Component {
  addNote = e => {
    this.props.add(e);
  };

  removeNote = id => {
    this.props.rem(id);
  };

  doneNote = id => {
    this.props.done(id);
  };

  render() {
    return (
      <div className="wrappper">
        <AddNote addNote={this.addNote} />
        <List
          todoState={this.props.todoState}
          removeNote={this.removeNote}
          doneNote={this.doneNote}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.todo);
  return {
    todoState: state.todo
  };
};

let nextId = 0;
const mapDispatchToProps = dispatch => {
  return {
    add: text => {
      dispatch({ type: "ADD_TODO", id: nextId++, text, complete: false });
    },
    rem: id => {
      dispatch({ type: "REM_TODO", id: id });
    },
    done: id => {
      dispatch({ type: "DONE_TODO", id: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
