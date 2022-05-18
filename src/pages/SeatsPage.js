import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SeatsList from "../components/seats_list/SeatsList";
import Forms from "../components/forms/Forms";
import Footer from "../components/footer/Footer";

export default function Seats(props) {
    const { idSessao } = useParams();
    const { setReceipt } = props;

    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState([]);
    const [date, setDate] = useState("");
    const [weekday, setWeekday] = useState("");
    const [session, setSession] = useState("");
    const [customer, setCustomer] = useState("");
    const [CPF, setCPF] = useState("");

    const selectedSeatsIds = seats.filter(seat => seat.isSelected).map(seat => seat.id);
    const selectedSeatsNames = seats.filter(seat => seat.isSelected).map(seat => seat.name);
    

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(({data}) => {
            const { seats, movie, day, name } = data;

            const newSeats = seats.map(seat => ({...seat, "isSelected": false}));

            setSeats([...newSeats]);
            setMovie(movie);
            setDate(day.date);
            setWeekday(day.weekday);
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
            ids: selectedSeatsIds,
            name: customer,
            cpf: CPF
        }
        const receipt = {
            movie: movie.title,
            date: date,
            session: session,
            seats: selectedSeatsNames,
            customer: customer,
            cpf: CPF
        }

        if (!customer || !CPF || selectedSeatsIds.length === 0) {
            alert("Preencha todos os campos para poder comprar os assentos!");
            return;
        }

        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", request);
        setReceipt(receipt);
    }

    return (
        <>
            <SeatsList seats={seats} updateSeats={updateSeats} />
            {(!customer || !CPF || selectedSeatsIds.length === 0)
                ? <Forms customer={customer} CPF={CPF} setCustomer={setCustomer} setCPF={setCPF} />
                : <Forms customer={customer} CPF={CPF} setCustomer={setCustomer} setCPF={setCPF} buySeats={buySeats} />
            }
            <Footer movie={movie} weekday={weekday} session={session} />
        </>
    )
}
