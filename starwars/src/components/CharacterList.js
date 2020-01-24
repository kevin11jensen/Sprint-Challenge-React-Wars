import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components';

import CharacterDob from "./CharacterDob";
import CharacterSpecies from "./CharacterSpecies";
import CharacterHomeworld from "./CharacterHomeworld";
import CharacterGender from "./CharacterGender";
import CharacterEyes from "./CharacterEyes";
import CharacterSkin from "./CharacterSkin";
import CharacterHair from "./CharacterHair";


const List = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
    border: .5rem solid darkBlue;
    border-radius: 1rem;
    margin: 1%;
    color: darkBlue;

`;

const Name = styled.div`
    font-size: 2rem;
    background-color: darkBlue;
    color: #f5f3ce;
    
    padding: 1%;
    border: 2px solid #f5f3ce;
    border-radius: 1rem;
`;

const Info = styled.div`
    font-size: 1.6rem;
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
                <CharacterDob dob = {props.people.birth_year} />
                <CharacterSpecies species = {props.people.species} />
                <CharacterHomeworld homeworld = {props.people.homeworld} />
            </Info>

            <Description>
                <CharacterGender gender = {props.people.gender} />
                <CharacterEyes eyecolor = {props.people.eye_color} />
                <CharacterSkin skincolor = {props.people.skin_color} />
                <CharacterHair haircolor = {props.people.hair_color} />
            </Description>
        </List>
    )
}