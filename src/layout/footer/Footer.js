import { Container, MainContainer, Poster, Info } from "./styles.js";

export default function Footer(props) {
    const { movie, weekday, session } = props;

    return (
        <Container>
            <MainContainer>
                <Poster>
                    {<img src={movie.posterURL} alt={movie.title} />}
                </Poster>
                <Info>
                    {<h2>{movie.title}</h2>}
                    {weekday && session && <h2>{`${weekday} - ${session}`}</h2>}
                </Info>
            </MainContainer>
        </Container>
    )
}