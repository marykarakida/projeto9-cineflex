import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SeatsList from "../components/seats_list/SeatsList";
import Forms from "../components/forms/Forms";
import Footer from "../components/footer/Footer";

export default function Seats(props) {
    const { idSessao } = useParams();
    const { setReceipt } = props;

    const [customers, setCustomers] = useState([]);
    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState([]);
    const [date, setDate] = useState("");
    const [weekday, setWeekday] = useState("");
    const [session, setSession] = useState("");
    
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

    function updateSeats(index, name, id) {
        // COLOCAR WINDOWS.CONFIRM PARA PERGUNTAR PARA O USUARIO SE ELE REALMENTE QUER DESSELECIONAR LUGAR

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
            setCustomers([...customers, {seat: name, idAssento: id, nome: "", cpf: ""}]);
        }

        if (selectedSeat.isAvailable === true) {
            selectedSeat.isSelected = !selectedSeat.isSelected;
            setSeats(newSeats);
        }
    }

    function buySeats() {
        const selectedSeatsIds = seats.filter(seat => seat.isSelected).map(seat => seat.id);

        const request = {
            ids: selectedSeatsIds, // ids dos assentos
            compradores: customers.map(customer => ({ idAssento: customer.idAssento, nome: customer.nome, cpf: customer.cpf }))
        }

        const receipt = {
            movie: movie.title,
            date: date,
            session: session,
            customers: customers
        }

        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", request);
        setReceipt(receipt);
    }

    function validateRequest(seats, customers) {
        const selectedSeats = seats.filter(seat => seat.isSelected);
        let validCustomers = customers.filter(customer => customer.nome !== "" && customer.cpf !== "");
        validCustomers = validCustomers.filter(customer => customer.cpf.length === 11);
        
        if (customers.length !== validCustomers.length || selectedSeats.length === 0) {
            return false;
        }
        return true;
    }

    return (
        <>
            <SeatsList seats={seats} updateSeats={updateSeats} />
            {(validateRequest(seats, customers))
                ? <Forms customers={customers} setCustomers={setCustomers} buySeats={buySeats} />
                : <Forms customers={customers} setCustomers={setCustomers} />
            }
            <Footer movie={movie} weekday={weekday} session={session} />
        </>
    )
}
