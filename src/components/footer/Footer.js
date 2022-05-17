import { MainContainer, Poster, Info } from "./styles.js";

export default function Footer(props) {
    const { movie, day } = props

    return (
        <MainContainer>
            <Poster>
                <img src={movie.posterURL} alt={movie.title} />
            </Poster>
            <Info>
                <h2>{movie.title}</h2>
                {day && <h2>{`${day.weekday} ${day.date}`}</h2>}
            </Info>
        </MainContainer>
    )
}