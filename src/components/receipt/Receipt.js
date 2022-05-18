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
                        <Info>
                            <h3>Ingressos</h3>
                            {receipt.seats.map((seat, index) => <p key={index}>Assento {seat}</p>)}
                        </Info>
                        <Info>
                            <h3>Comprador</h3>
                            <p>{receipt.customer}</p>
                            <p>{receipt.cpf}</p>
                        </Info>
                    </Column>
                </>
            }
            <Button>Voltar para Home</Button>
        </MainContainer>
    )
}