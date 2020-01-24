import React from "react";
import styled from 'styled-components';

const DOB = styled.div`
    color: darkBlue;
`;

export default function CharacterDob(props) {

    return <DOB>DOB: {props.dob}</DOB>
}