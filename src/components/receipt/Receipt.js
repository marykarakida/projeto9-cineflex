import { Fragment } from "react";
import { Link } from "react-router-dom";
import { MainContainer, Heading, Info, Button, Column } from "./styles";

export default function Receipt(props) {
    const { receipt } = props;

    function removeDuplicates(customers) {
        const customersNames = customers.map(customer => ({nome: customer.nome, cpf: customer.cpf}));
        const filtered = customersNames.filter((customer, index, array) => {
            return array.map(cpf => cpf.cpf).indexOf(customer.cpf) === index;
        })
        return filtered;
    }

    let customers = removeDuplicates(receipt.customers);

    return (
        <MainContainer>
            <Heading>
                Pedido feito <br />com sucesso!
            </Heading>
            <Column>
                <Info>
                    <h3>Filme e sessão</h3>
                    <p>{receipt.movie}</p>
                    <p>{receipt.date} {receipt.session}</p>
                </Info>
                {customers.map((info, index) => 
                    <Fragment key={index}>
                        <Info>
                            <h3>Ingresso(s)</h3>
                            {receipt.customers.map((customer, index) => {
                                if (customer.cpf === info.cpf) return <p key={index}>Assento {customer.seat}</p>
                                return ""
                            })}
                            <h3>Comprador</h3>
                            <p>Nome: {info.nome}</p>
                            <p>CPF: {info.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</p>
                        </Info>
                    </Fragment>
                )}
            </Column>
            <Link style={{textDecoration: "none"}} to="/"><Button>Voltar para Home</Button></Link>
        </MainContainer>
    )
}