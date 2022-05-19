import { MainContainer, Heading, Column, Wrap, Subtitle, Seat } from "./styles.js";

export default function SeatsList(props) {
    const { seats, updateSeats } = props;

    return (
        <MainContainer>
            <Heading>
                Selecione o(s) assento(s)
            </Heading>
            <Wrap>
                {seats.map((seat, index) =>
                    <Seat isSelected={seat.isSelected} isAvailable={seat.isAvailable} onClick={() => updateSeats(index, seat.name, seat.id)} key={seat.id}>{seat.name}</Seat>
                )}
            </Wrap>
            <Subtitle>
                <Column>
                    <Seat isSelected></Seat>
                    <p>Selecionado</p>
                </Column>
                <Column>
                    <Seat isAvailable={true}></Seat>
                    <p>Disponível</p>
                </Column>
                <Column>
                    <Seat isAvailable={false}></Seat>
                    <p>Indisponível</p>
                </Column>
            </Subtitle>
        </MainContainer>
    )
}