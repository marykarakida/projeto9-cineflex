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
    margin-bottom: 58px;
`

export const Button = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    width: 225px;
    height: 43px;
    background-color: ${props => props.clickable ? "#E8833A" : "#808F9D" };
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    cursor: ${props => props.clickable ? "pointer" : "default" };
`
