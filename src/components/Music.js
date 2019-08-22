import React from "react";
import audio from "../sounds/boom.wav";
class Music extends React.Component {
  state = {
    play: false
  };
  audio = new Audio(audio);

  togglePlay = () => {
     this.audio.currentTime=0;
    this.audio.play()
    /* this.setState({ play: !this.state.play });
    if (this.state.play) {
      audio.currentTime = 0;
      this.audio.play();
    } */
  };

  render() {
    return (
      <div>
        <button onClick={this.togglePlay}>
          {this.state.play ? "Pause" : "Play"}
        </button>
      </div>
    );
  }
}

export default Music;
