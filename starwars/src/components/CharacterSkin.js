import React from "react";
import styled from 'styled-components';

const SkinColor = styled.div`
    color: darkBlue;
`;
export default function CharacterSkin(props) {
  
    return <SkinColor>Skin Color: {props.skincolor}</SkinColor>;
  }