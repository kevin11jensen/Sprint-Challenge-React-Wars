import React from "react";
import styled from 'styled-components';

const Homeworld = styled.div`
    color: darkBlue;
`;
export default function CharacterHomeworld(props) {

    return <Homeworld>Homeworld: {props.homeworld}</Homeworld>
}