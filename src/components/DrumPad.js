import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 30px;
  background-color: #ff8f00;
  border-radius: 5px;
  cursor: pointer;
`;

export class DrumPad extends Component {
  audio = new Audio(this.props.src);

  togglePlay = () => {
    this.audio.currentTime=0;
    this.audio.play()
  };

  render() {
    return (
      <Wrapper
        className="drum-pad"
        id={`drum-${this.props.drum}`}
        onClick={this.togglePlay}
      >
        <span>{this.props.drum}</span>
        <audio className="clip" src={this.props.src} id={this.props.drum} />
      </Wrapper>
    );
  }
}

export default DrumPad;
