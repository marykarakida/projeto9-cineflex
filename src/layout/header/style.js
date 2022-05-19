import styled from "styled-components";

export const Container = styled.div `
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 67px;
    width: 100%;
    background-color: #C3CFD9;
`

export const MainContainer = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 450px;
`

export const Heading = styled.h2 `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
`

export const Button = styled.div `
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    width: 64px;
    height: 34px;
    background-color: #E8833A;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    cursor: pointer;
`

