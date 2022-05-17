// import { useState } from "react";
import Footer from "../../components/footer/Footer";
import { MainContainer, Heading, Container, Subtitle, Costoumer, Seat, Button, Poster, Movie } from "./styles";

const seats = {
    "id": 1, "name": "15:00", "day": { "id": 24102021, "weekday": "Domingo", "date": "24/10/2021" }, "movie": { "id": 1, "title": "Zack Snyder Justice League", "posterURL": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg", "overview": "Determined to ensure Superman ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.", "releaseDate": "2021-03-18T00:00:00.000Z" },

    "seats": [{ "id": 1, "name": "1", "isAvailable": false }, { "id": 2, "name": "2", "isAvailable": false }, { "id": 3, "name": "3", "isAvailable": false }, { "id": 4, "name": "4", "isAvailable": false }, { "id": 5, "name": "5", "isAvailable": false }, { "id": 6, "name": "6", "isAvailable": false }, { "id": 7, "name": "7", "isAvailable": false }, { "id": 8, "name": "8", "isAvailable": false }, { "id": 9, "name": "9", "isAvailable": false }, { "id": 10, "name": "10", "isAvailable": false }, { "id": 11, "name": "11", "isAvailable": false }, { "id": 12, "name": "12", "isAvailable": false }, { "id": 13, "name": "13", "isAvailable": false }, { "id": 14, "name": "14", "isAvailable": false }, { "id": 15, "name": "15", "isAvailable": false }, { "id": 16, "name": "16", "isAvailable": false }, { "id": 17, "name": "17", "isAvailable": false }, { "id": 18, "name": "18", "isAvailable": false }, { "id": 19, "name": "19", "isAvailable": false }, { "id": 20, "name": "20", "isAvailable": false }, { "id": 21, "name": "21", "isAvailable": false }, { "id": 22, "name": "22", "isAvailable": false }, { "id": 23, "name": "23", "isAvailable": false }, { "id": 24, "name": "24", "isAvailable": false }, { "id": 25, "name": "25", "isAvailable": false }, { "id": 26, "name": "26", "isAvailable": false }, { "id": 27, "name": "27", "isAvailable": false }, { "id": 28, "name": "28", "isAvailable": false }, { "id": 29, "name": "29", "isAvailable": false }, { "id": 30, "name": "30", "isAvailable": false }, { "id": 31, "name": "31", "isAvailable": false }, { "id": 32, "name": "32", "isAvailable": false }, { "id": 33, "name": "33", "isAvailable": false }, { "id": 34, "name": "34", "isAvailable": false }, { "id": 35, "name": "35", "isAvailable": false }, { "id": 36, "name": "36", "isAvailable": false }, { "id": 37, "name": "37", "isAvailable": false }, { "id": 38, "name": "38", "isAvailable": false }, { "id": 39, "name": "39", "isAvailable": false }, { "id": 40, "name": "40", "isAvailable": false }, { "id": 41, "name": "41", "isAvailable": false }, { "id": 42, "name": "42", "isAvailable": false }, { "id": 43, "name": "43", "isAvailable": false }, { "id": 44, "name": "44", "isAvailable": false }, { "id": 45, "name": "45", "isAvailable": false }, { "id": 46, "name": "46", "isAvailable": false }, { "id": 47, "name": "47", "isAvailable": false }, { "id": 48, "name": "48", "isAvailable": false }, { "id": 49, "name": "49", "isAvailable": false }, { "id": 50, "name": "50", "isAvailable": false }]
}

export default function Seats() {

    // const [seatsSelected, setSeatsSelected] = useState([])

    // function selectSeat(id) {
    //     setSeatsSelected([...seatsSelected, id])
    // }
    // onClick={() => selectSeat(seat.id)}

    return (
        <MainContainer>
            <Heading>
                <h2>Selecione o(s) assento(s)</h2>
            </Heading>
            <Container>
                {seats.seats.map(seat =>
                    <Seat key={seat.id} isAvailable={seat.isAvailable}>{seat.name}</Seat>
                )}
            </Container>
            <Subtitle>
                <div>
                    <Seat isAvailable={false}></Seat>
                    <p>Selecionado</p>
                </div>
                <div>
                    <Seat isAvailable={true}></Seat>
                    <p>Disponível</p>
                </div>
                <div>
                    <Seat isAvailable={false}></Seat>
                    <p>Indisponível</p>
                </div>
            </Subtitle>
            <Costoumer>
                <div>
                    <h3>Nome do comprador:</h3>
                    <input placeholder="Digite seu nome..."></input>
                </div>
                <div>
                    <h3>CPF do comprador:</h3>
                    <input placeholder="Digite seu CPF..."></input>
                </div>
            </Costoumer>
            <Button>Reservar assento(s)</Button>
            <Footer>
                <Poster>
                    <img src={seats.movie.posterURL} alt={seats.movie.title} />
                </Poster>
                <Movie>
                    <h2>{seats.movie.title}</h2>
                    <h2>{seats.movie.title}</h2>
                </Movie>
            </Footer>
        </MainContainer>
    )
}
