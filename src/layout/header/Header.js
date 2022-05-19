import { useLocation, useNavigate } from "react-router-dom";
import { Container, MainContainer, Heading, Button } from "./style.js";

export default function Header() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <Container>
            <MainContainer>
                {pathname !== "/" && <Button onClick={() => {navigate(-1)}}><ion-icon name="return-down-back-outline"></ion-icon></Button>}
                <Heading>CINEFLEX</Heading>
            </MainContainer>
        </Container>
    )
}

