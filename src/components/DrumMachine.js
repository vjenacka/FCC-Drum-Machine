import React from "react";
import PadContainer from "./PadContainer";
import Display from "./Display";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 25vh auto 0 auto;
  padding: 20px;
  background-color: #ffd54f;
  border: 4px solid #c62828;
`;

const DrumMachine = ({notes,currentNote,renderCurrentNote}) => {
  return (
    <Wrapper id="drum-machine">
      <PadContainer notes={notes} renderCurrentNote={renderCurrentNote}/>
      <Display currentNote={currentNote}/>
    </Wrapper>
  );
};

export default DrumMachine;
