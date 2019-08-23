import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 30px;
  background-color: #ff8f00;
  border-radius: 5px;
  cursor: pointer;
`;

export class DrumPad extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  togglePlay = e => {
    const audio = e.target.lastChild;
    audio.currentTime = 0;
    audio.play();
    this.props.renderCurrentNote(this.props.note.text);
  };
  handleKeyDown = e => {
    const { note } = this.props;
    if (e.key.toUpperCase() === note.drum) {
      const audio = document.getElementById(`${note.drum}`);
      audio.currentTime = 0;
      audio.play();
      this.props.renderCurrentNote(note.text);
    }
  };
  render() {
    const { note } = this.props;
    return (
      <Wrapper
        className="drum-pad"
        id={`drum-${note.drum}`}
        onClick={this.togglePlay}
      >
        {note.drum}
        <audio className="clip" src={note.src} id={note.drum} />
      </Wrapper>
    );
  }
}

export default DrumPad;
