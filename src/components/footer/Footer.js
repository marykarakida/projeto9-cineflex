import { MainContainer } from "./styles.js";

export default function Footer(props) {
    return (
        <MainContainer>
            {props.children}
        </MainContainer>
    )
}