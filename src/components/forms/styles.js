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
    align-items:flex-start;
`

export const CostumerForms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const Costoumer = styled(Column) `
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 58px;
`

export const Button = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
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
