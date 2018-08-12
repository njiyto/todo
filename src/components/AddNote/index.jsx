import React from "react";

export default class AddNote extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handlerButton = () => {
    this.props.addNote(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={e => {
            this.setState({ text: e.target.value });
          }}
        />
        <input
          type="button"
          value="Add"
          style={{ marginLeft: 10 }}
          onClick={this.handlerButton}
        />
      </div>
    );
  }
}
