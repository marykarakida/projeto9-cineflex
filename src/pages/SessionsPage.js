import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../layout/footer/Footer";
import ShowTimeList from "../components/show_time_list/ShowTimeList";

export default function SessionsPage() {
    const {idFilme} = useParams();

    const [days, setDays] = useState([]);
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then(response => {
            setDays(response.data.days);
            setMovie(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <ShowTimeList days={days} />
            <Footer movie={movie} />
        </>
    )
}