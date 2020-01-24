import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import CharacterDob from "./CharacterDob";
import CharacterSpecies from "./CharacterSpecies";
import CharacterHomeworld from "./CharacterHomeworld";
import CharacterGender from "./CharacterGender";
import CharacterEyes from "./CharacterEyes";
import CharacterSkin from "./CharacterSkin";
import CharacterHair from "./CharacterHair";


const List = styled.div`

    color: darkBlue;

`;

const Name = styled.div`

    color: darkBlue;

`;

const Info = styled.div`

    color: darkBlue;

`;

const Description = styled.div`

    color: darkBlue;

`;

export default function CharacterList(props) {

    return (
        <List>
            <Name>{props.people.name}</Name>
            <Info>
                <CharacterDob birth_year = {props.people.birth_year} />
                <CharacterSpecies species = {props.people.species} />
                <CharacterHomeworld homeworld = {props.people.homeworld} />
            </Info>

            <Description>
                <CharacterGender gender = {props.people.gender} />
                <CharacterEyes eye_color = {props.people.eye_color} />
                <CharacterSkin skincolor = {props.people.skin_color} />
                <CharacterHair haircolor = {props.people.hair_color} />
            </Description>
        </List>
    )
}