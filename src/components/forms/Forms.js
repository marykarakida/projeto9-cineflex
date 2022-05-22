import { Column, CostumerForms, Costoumer, Button, MainContainer } from "./styles";

export default function Forms(props) {
    const { customers, setCustomers, buySeats } = props;

    function changeCustomerName(event, index) {
        const newCustomers = [...customers];
        const customer = newCustomers[index];
        customer.nome = event.target.value;

        setCustomers(newCustomers);
    }

    function changeCustomerCpf(event, index) {
        const newCustomers = [...customers];
        const customer = newCustomers[index];
        customer.cpf = event.target.value;

        setCustomers(newCustomers);
    }

    return (
        <MainContainer>
            <CostumerForms onSubmit={buySeats}>
                {customers.map((customer, index) =>
                    <Costoumer key={index}>
                        <Column>
                            <h3 style={{fontWeight: 700}}>Assento {customer.seat}</h3>
                            <h3>Nome do comprador:</h3>
                            <input placeholder="Digite seu nome..." type="text" required value={customer.nome} onChange={event => changeCustomerName(event, index)}></input>
                        </Column>
                        <Column>
                            <h3>CPF do comprador:</h3>
                            <input placeholder="Digite seu CPF..." type="text" pattern="\d*" maxLength={11} minLength={11} required value={customer.cpf} onChange={event => changeCustomerCpf(event, index)} ></input>
                        </Column>
                    </Costoumer>
                )}
                <Button type="submit">Reservar assento(s)</Button>
            </CostumerForms>
        </MainContainer>
    )
}