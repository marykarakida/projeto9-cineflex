import styled from "styled-components";
import { Container } from "../../assets/styles/globalStyles.js"

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
    padding: 30px 0;
`

export const List = styled(Container) `
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 310px) {
        justify-content: center;
    }
`

export const Poster = styled.div `
    margin-bottom: 10px;
    border-radius: 3px;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    width: 130px;
    height: 190px;
    background-color: #FFFFFF;
    cursor: pointer;
`