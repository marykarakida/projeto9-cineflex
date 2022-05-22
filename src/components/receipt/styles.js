import styled from "styled-components";
import { Container } from "../../assets/styles/globalStyles";

export const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 68px 24px;
`

export const Heading = styled.h2 `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0 50px;
    font-weight: 700;
    text-align: center;
    color: #247A6B;
`

export const Column = styled(Container) `
    flex-direction: column;
`

export const Info = styled.div `
    margin: 0 0 30px;
    width: 100%;

    h3 {
        font-weight: 700;
    }
    p {
        font-size: 22px;
        letter-spacing: 0.04em;
    }
`

export const Button = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
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