import { Link } from "react-router-dom";
import { MainContainer, Heading, List, Day, Buttons, Button } from "./styles";

export default function ShowTimeList(props) {
    const { days } = props;

    return (
        <MainContainer>
            <Heading>
                Selecione o horário
            </Heading>
            <List>
                {days.map(day => 
                    <Day key={day.id}>
                        <h3>{day.weekday} - {day.date}</h3>
                        <Buttons>
                            {day.showtimes.map(time => 
                                <Link  to={`/assentos/${time.id}`} style={{ textDecoration: 'none' }} key={time.id}>
                                    <Button>{time.name}</Button>
                                </Link>
                            )}
                        </Buttons>
                    </Day>
                )}
            </List>
        </MainContainer>
    )
}