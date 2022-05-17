import { MainContainer, Heading, Info, Button, Column } from "./styles"

export default function Receipt() {
    return (
        <MainContainer>
            <Heading>
                Pedido feito <br />com sucesso!
            </Heading>
            <Column>
                <Info>
                    <h3>Filme e sessão</h3>
                    <p>Filme</p>
                    <p>Data e Horario</p>
                </Info>
                <Info>
                    <h3>Ingressos</h3>
                    <p>Map de Assentos</p>
                </Info>
                <Info>
                    <h3>Comprador</h3>
                    <p>Nome</p>
                    <p>CPF</p>
                </Info>
            </Column>
            <Button>Voltar para Home</Button>
        </MainContainer>
    )
}