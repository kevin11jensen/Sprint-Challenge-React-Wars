import React from "react";
import styled from 'styled-components';

const Gender = styled.div`
    color: darkBlue;
`;
export default function CharacterGender(props) {
  
    return <Gender>Gender: {props.gender}</Gender>;
  }