import { useState, useEffect } from "react";
import axios from "axios"
import MovieList from "../components/movie_list/MovieList";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => setMovies([...response.data]))
    }, [])

    return (
            <MovieList movies={movies} />
    )
}