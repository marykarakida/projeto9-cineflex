import { MainContainer, Heading, Container, Info, Button } from "./styles"

export default function Success() {
    return (
        <MainContainer>
            <Heading>
                <h2>Pedido feito <br />com sucesso!</h2>
            </Heading>
            <Container>
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
            </Container>
            <Button>Voltar para Home</Button>
        </MainContainer>
    )
}