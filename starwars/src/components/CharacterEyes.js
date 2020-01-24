import React from "react";
import styled from 'styled-components';

const Eyes = styled.div`
    color: darkBlue;
`;
export default function CharacterEyes(props) {
  
    return <Eyes>Eyes: {props.eyecolor}</Eyes>;
  }