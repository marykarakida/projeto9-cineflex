import styled from "styled-components";

export const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 68px 24px;
`

export const Heading = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0 20px;
`

export const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    width: 385px;
`

export const Subtitle = styled.div `
    display: flex;
    justify-content: space-around;
    margin-bottom: 25px;
    padding: 16px 0;
    width: 385px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`

export const Costoumer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 385px;
`

export const Seat = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px 3px;
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
`

export const Poster = styled.div `
    margin-right: 14px;
    border-radius: 2px;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
`

export const Movie = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
`