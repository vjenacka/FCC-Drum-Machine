import React from "react";
import DrumPad from "./DrumPad";
import styled from 'styled-components';


const Wrapper= styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-gap:5px;
`

const PadContainer= ({keyCode,notes,renderCurrentNote}) =>{
  const drumPadList= notes.map(note=>{
    return <DrumPad key={`${note.drum}-key`} note={note} renderCurrentNote={renderCurrentNote}/>
  })
  return (
    <Wrapper className="pad-container">
      {drumPadList}
    </Wrapper>
  );
}

export default PadContainer;
