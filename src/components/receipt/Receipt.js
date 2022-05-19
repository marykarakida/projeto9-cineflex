import { Fragment } from "react";
import { MainContainer, Heading, Info, Button, Column } from "./styles"

export default function Receipt(props) {
    const { receipt } = props;

    const isReceiptEmpty = Object.keys(receipt).length === 0;

    return (
        <MainContainer>
            {!isReceiptEmpty &&
                <>
                    <Heading>
                        Pedido feito <br />com sucesso!
                    </Heading>
                    <Column>
                        <Info>
                            <h3>Filme e sessão</h3>
                            <p>{receipt.movie}</p>
                            <p>{receipt.date} {receipt.session}</p>
                        </Info>
                        {receipt.customers.map((customer, index) => 
                            <Fragment key={index}>
                                <Info>
                                    <h3>Ingresso</h3>
                                    <p>Assento {customer.seat}</p>
                                    <h3>Comprador</h3>
                                    <p>Nome: {customer.nome}</p>
                                    <p>CPF: {customer.cpf}</p>
                                </Info>
                            </Fragment>
                        )}
                    </Column>
                </>
            }
            <Button>Voltar para Home</Button>
        </MainContainer>
    )
}

// RENDERIZAR INFORMACOES POR COMPRADOR E MOSTRAR QUAIS ASSENTOS ELE COMPROU