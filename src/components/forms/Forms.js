import { Column, Costoumer, Button, MainContainer } from "./styles";

export default function Forms() {
    return (
        <MainContainer>
            <Costoumer>
                <Column align="flex-start" >
                    <h3>Nome do comprador:</h3>
                    <input placeholder="Digite seu nome..."></input>
                </Column>
                <Column align="flex-start" >
                    <h3>CPF do comprador:</h3>
                    <input placeholder="Digite seu CPF..."></input>
                </Column>
            </Costoumer>
            <Button>Reservar assento(s)</Button>
        </MainContainer>
    )
}