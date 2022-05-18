import styled from "styled-components";
import { Container } from "../../assets/styles/globalStyles";

export const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 24px 150px;
`

export const Column = styled(Container) `
    flex-direction: column;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
`


export const Costoumer = styled(Column) `
    align-items: flex-start;
    gap: 10px;
`

export const Seat = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px 0;
    border: 1px solid ${props => props.isAvailable ? "#808F9D" : "#F7C52B"};;
    border-radius: 12px;
    width: 26px;
    height: 26px;
    background-color: ${props => props.isAvailable ? "#C3CFD9" : "#FBE192"};
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
    color: #000000;
    cursor: pointer;
`

export const Button = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 58px;
    border-radius: 3px;
    width: 225px;
    height: 43px;
    background-color: #E8833A;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    cursor: pointer;
`
