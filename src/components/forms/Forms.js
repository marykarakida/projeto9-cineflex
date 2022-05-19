import { Link } from "react-router-dom";
import { Column, Costoumer, Button, MainContainer } from "./styles";

export default function Forms(props) {
    const { customers, setCustomers, buySeats } = props;

    function changeCustomerName(event, index) {
        const newCustomers = [...customers];
        const customer = newCustomers[index];
        customer.nome = event.target.value;

        setCustomers(newCustomers);
    }

    function changeCustomerCpf(event, index) {
        const newCpf = [...customers];
        const cpf = newCpf[index];
        cpf.cpf = event.target.value;

        setCustomers(newCpf);
    }

    return (
        <MainContainer>
            {customers.map((customer, index) =>
                <Costoumer key={index}>
                    <Column align="flex-start" >
                        <h3>Assento {customer.seat}</h3>
                        <h3>Nome do comprador:</h3>
                        <input placeholder="Digite seu nome..." value={customer.nome} onChange={event => changeCustomerName(event, index)}></input>
                    </Column>
                    <Column align="flex-start" >
                        <h3>CPF do comprador:</h3>
                        <input placeholder="Digite seu CPF..." value={customer.cpf} onChange={event => changeCustomerCpf(event, index)} ></input>
                    </Column>
                </Costoumer>
            )}

            {buySeats
                ? <Link to="/sucesso" style={{ textDecoration: 'none' }} ><Button onClick={buySeats} clickable >Reservar assento(s)</Button></Link>
                : <Button>Reservar assento(s)</Button>
            }
        </MainContainer>
    )
}