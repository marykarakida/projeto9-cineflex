import { Link } from "react-router-dom";
import { Heading, List, MainContainer, Poster } from "./styles.js";

export default function MovieList(props) {
    const { movies } = props;

    return (
        <MainContainer>
            <Heading>
                Selecione o filme
            </Heading>
            <List>
                {movies.map(movie => 
                    <Link key={movie.id} to={`/sessoes/${movie.id}`}>
                        <Poster >
                            <img src={movie.posterURL} alt={movie.title} />
                        </Poster>    
                    </Link>
                )}
            </List>
        </MainContainer>
    )
}