import { MainContainer, Heading, Column, Wrap, Subtitle, Seat } from "./styles.js";

export default function SeatsList(props) {
    const { seats } = props;

    return (
        <MainContainer>
            <Heading>
                Selecione o(s) assento(s)
            </Heading>
            <Wrap>
                {seats.seats.map(seat =>
                    <Seat key={seat.id} isAvailable={seat.isAvailable}>{seat.name}</Seat>
                )}
            </Wrap>
            <Subtitle>
                <Column align="center" >
                    <Seat isAvailable={false}></Seat>
                    <p>Selecionado</p>
                </Column>
                <Column align="center" >
                    <Seat isAvailable={true}></Seat>
                    <p>Disponível</p>
                </Column>
                <Column align="center" >
                    <Seat isAvailable={false}></Seat>
                    <p>Indisponível</p>
                </Column>
            </Subtitle>
        </MainContainer>
    )
}