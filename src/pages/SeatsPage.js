import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SeatsList from "../components/seats_list/SeatsList";
import Forms from "../components/forms/Forms";
import Footer from "../components/footer/Footer";

export default function Seats() {
    const { idSessao } = useParams;

    const [seats, setSeats] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => {
            setSeats(response.data.seats)
        })
    })

    return (
        <>
            <SeatsList seats={seats} />
            <Forms />
            {/* <Footer movie={seats.movie} day={seats.day} /> */}
        </>
    )
}
