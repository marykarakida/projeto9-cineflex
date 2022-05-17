import { MainContainer, Heading, List, Day, Buttons, Button } from "./styles";

export default function ShowTimeList(props) {
    const { movie } = props;

    return (
        <MainContainer>
            <Heading>
                Selecione o horário
            </Heading>
            <List>
                {movie.days.map(day => 
                    <Day key={day.id}>
                        <h3>{day.weekday} - {day.date}</h3>
                        <Buttons>
                            {day.showtimes.map((time, index) => 
                                <Button key={index}>{time.name}</Button>
                            )}
                        </Buttons>
                    </Day>
                )}
            </List>
        </MainContainer>
    )
}