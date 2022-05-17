import styled from "styled-components";
import { Container } from "../../assets/styles/globalStyles";

export const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 68px 24px 118px;
`

export const Heading = styled.h2 `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
`

export const List = styled(Container) `
    flex-direction: column;
`

export const Day = styled(Container) `
    flex-direction: column;
`

export const Buttons = styled(Container) `
    gap: 8px;
    padding: 22px 0;
`

export const Button = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
`