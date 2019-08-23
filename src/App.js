import React from "react";
import DrumMachine from "./components/DrumMachine";

//sound imports
import boom from "./sounds/boom.wav";
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tink from "./sounds/tink.wav";
import tom from "./sounds/tom.wav";

class App extends React.Component {
  state = {
    notes: [
      { drum: "Q", src: boom, text: "BOOM" },
      { drum: "W", src: clap, text: "CLAP" },
      { drum: "E", src: hihat, text: "HIHAT" },
      { drum: "A", src: kick, text: "KICK" },
      { drum: "S", src: openhat, text: "OPENHAT" },
      { drum: "D", src: ride, text: "RIDE" },
      { drum: "Z", src: snare, text: "SNARE" },
      { drum: "X", src: tink, text: "TINK" },
      { drum: "C", src: tom, text: "TOM" }
    ],
    currentNote: ""
  };
  renderCurrentNote = note => {
    this.setState({
      currentNote: note
    });
  };
  render() {
    return (
      <div className="App">
        <DrumMachine
          notes={this.state.notes}
          currentNote={this.state.currentNote}
          renderCurrentNote={this.renderCurrentNote}
        />
      </div>
    );
  }
}

export default App;
