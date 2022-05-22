import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SeatsList from "../components/seats_list/SeatsList";
import Forms from "../components/forms/Forms";
import Footer from "../layout/footer/Footer";

export default function SeatsPage() {
    const { idSessao } = useParams();
    const navigate = useNavigate();

    const [customers, setCustomers] = useState([]);
    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState([]);
    const [date, setDate] = useState("");
    const [weekday, setWeekday] = useState("");
    const [session, setSession] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(({ data }) => {
            const { seats, movie, day, name } = data;

            const newSeats = seats.map(seat => ({ ...seat, "isSelected": false }));

            setSeats([...newSeats]);
            setMovie(movie);
            setDate(day.date);
            setWeekday(day.weekday);
            setSession(name);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function updateSeats(index, name, id) {
        const newSeats = [...seats];
        const selectedSeat = newSeats[index];

        if (selectedSeat.isAvailable === false) {
            alert("Esse assento não está disponível");
            return;
        }

        if (selectedSeat.isSelected === true) {
            if (!window.confirm("Você realmente quer desmarcar esse assento?")) {
                return
            }
            const newCustomers = customers.filter(customer => customer.idAssento !== selectedSeat.id);
            setCustomers(newCustomers);
        } else {
            let insertPosition = customers.length;
            for (let i = 0; i < customers.length; i++) {
                if (selectedSeat.id < customers[i].idAssento) {
                    insertPosition = i;
                    break
                }
            }

            const newCustomers = [...customers];
            newCustomers.splice(insertPosition, 0, { seat: name, idAssento: id, nome: "", cpf: "" });
            setCustomers(newCustomers);
        }

        if (selectedSeat.isAvailable === true) {
            selectedSeat.isSelected = !selectedSeat.isSelected;
            setSeats(newSeats);
        }
    }

    function buySeats(event) {
        event.preventDefault();
        const selectedSeatsIds = seats.filter(seat => seat.isSelected).map(seat => seat.id);

        if (selectedSeatsIds.length === 0) {
            alert("Selecione pelo menos um assento.");
            return;
        }
        
        const request = {
            ids: selectedSeatsIds, 
            compradores: customers.map(customer => ({ idAssento: customer.idAssento, nome: customer.nome, cpf: customer.cpf }))
        }
        const receipt = {
            movie: movie.title,
            date: date,
            session: session,
            customers: customers
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", request);
        promise.then(() => 
            navigate("/sucesso", {state: {receipt: receipt}} )
        )
    }

    return (
        <>
            <SeatsList seats={seats} updateSeats={updateSeats} />
            <Forms customers={customers} setCustomers={setCustomers} buySeats={buySeats} />
            <Footer movie={movie} weekday={weekday} session={session} />
        </>
    )
}
