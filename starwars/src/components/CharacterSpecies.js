import React from "react";
import styled from 'styled-components';

const Species = styled.div`
    color: darkBlue;
`;
export default function CharacterSpecies(props) {

    return <Species>Species: {props.species}</Species>
}