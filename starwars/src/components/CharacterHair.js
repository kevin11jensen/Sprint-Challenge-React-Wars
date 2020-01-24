import React from "react";
import styled from 'styled-components';

const HairColor = styled.div`
    color: darkBlue;
`;
export default function CharacterHair(props) {
  
    return <HairColor>Hair: {props.haircolor}</HairColor>;
  }