import styled from "styled-components";
import { Container } from "../../assets/styles/globalStyles";

export const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 68px 24px 40px;
`

export const Heading = styled.h2 `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0 20px;
`

export const Column = styled(Container) `
    flex-direction: column;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
`

export const Wrap = styled(Container) `
    flex-wrap: wrap;
    gap: 7px;
    width: 325px;
`

export const Subtitle = styled(Container) `
    justify-content: space-around;
    margin-bottom: 25px;
    padding: 16px 0;
    width: 385px;

    p {
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
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
