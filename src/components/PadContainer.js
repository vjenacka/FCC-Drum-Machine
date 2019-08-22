import React from "react";
import DrumPad from "./DrumPad";
import styled from 'styled-components';

//sound imports
import boom from '../sounds/boom.wav';
import clap from '../sounds/clap.wav';
import hihat from '../sounds/hihat.wav';
import kick from '../sounds/kick.wav';
import openhat from '../sounds/openhat.wav';
import ride from '../sounds/ride.wav';
import snare from '../sounds/snare.wav';
import tink from '../sounds/tink.wav';
import tom from '../sounds/tom.wav';

const Wrapper= styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-gap:5px;
`

const PadContainer= ({keyCode}) =>{
  return (
    <Wrapper className="pad-container">
      <DrumPad drum='Q' keyCode={keyCode} src={boom}/>
      <DrumPad drum='W' keyCode={keyCode} src={clap}/>
      <DrumPad drum='E' keyCode={keyCode} src={hihat}/>
      <DrumPad drum='A' keyCode={keyCode} src={kick}/>
      <DrumPad drum='S' keyCode={keyCode} src={openhat}/>
      <DrumPad drum='D' keyCode={keyCode} src={ride}/>
      <DrumPad drum='Z' keyCode={keyCode} src={snare}/>
      <DrumPad drum='X' keyCode={keyCode} src={tink}/>
      <DrumPad drum='C' keyCode={keyCode} src={tom}/>
    </Wrapper>
  );
}

export default PadContainer;
