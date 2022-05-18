import { Link } from "react-router-dom";
import { Column, Costoumer, Button, MainContainer } from "./styles";

export default function Forms(props) {
    const { customer, CPF, setCustomer, setCPF, buySeats } = props;

    return (
        <MainContainer>
            <Costoumer>
                <Column align="flex-start" >
                    <h3>Nome do comprador:</h3>
                    <input placeholder="Digite seu nome..." value={customer} onChange={event => setCustomer(event.target.value)}></input>
                </Column>
                <Column align="flex-start" >
                    <h3>CPF do comprador:</h3>
                    <input placeholder="Digite seu CPF..." value={CPF} onChange={event => setCPF(event.target.value)} ></input>
                </Column>
            </Costoumer>
                {buySeats
                    ? <Link to="/sucesso" style={{ textDecoration: 'none' }} ><Button onClick={buySeats} clickable >Reservar assento(s)</Button></Link>
                    : <Button>Reservar assento(s)</Button>
                }
        </MainContainer>
    )
}