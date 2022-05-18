import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SeatsList from "../components/seats_list/SeatsList";
import Forms from "../components/forms/Forms";
import Footer from "../components/footer/Footer";

export default function Seats() {
    const { idSessao } = useParams();

    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState([]);
    const [day, setDay] = useState("");
    const [session, setSession] = useState("");
    const [customer, setCustomer] = useState("");
    const [CPF, setCPF] = useState("");

    const selectedSeats = seats.filter(seat => seat.isSelected).map(seat => seat.id);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(({data}) => {
            const { seats, movie, day, name } = data;

            const newSeats = seats.map(seat => ({...seat, "isSelected": false}));

            setSeats([...newSeats]);
            setMovie(movie);
            setDay(day.weekday);
            setSession(name);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function updateSeats(index) {
        const newSeats = [...seats];
        const selectedSeat = newSeats[index];

        if (selectedSeat.isAvailable === false) {
            alert("Esse assento não está disponível");
            return;
        } else {
            selectedSeat.isSelected = !selectedSeat.isSelected;
        }

        setSeats(newSeats);
    }

    function buySeats() {
        const request = {
            ids: selectedSeats,
            name: customer,
            cpf: CPF
        }

        if (!customer || !CPF || selectedSeats.length === 0) {
            alert("Preencha todos os campos para poder comprar os assentos!");
            return;
        }

        console.log(request)

        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", request);
    }

    return (
        <>
            <SeatsList seats={seats} updateSeats={updateSeats} />
            {(!customer || !CPF || selectedSeats.length === 0)
                ? <Forms customer={customer} CPF={CPF} setCustomer={setCustomer} setCPF={setCPF} />
                : <Forms customer={customer} CPF={CPF} setCustomer={setCustomer} setCPF={setCPF} buySeats={buySeats} />
            }
            <Footer movie={movie} day={day} session={session} />
        </>
    )
}
