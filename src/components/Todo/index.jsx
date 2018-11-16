import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

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
  return {
    todoState: state
  };
};

let nextId = 0;
const mapDispatchToProps = dispatch => {
  return {
    add: text => dispatch(actions.add(nextId++, text)),
    rem: id => dispatch(actions.remove(id)),
    done: id => dispatch(actions.done(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
