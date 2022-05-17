import { Heading, List, MainContainer, Poster } from "./styles.js";

const movies  = [{"id":1,"title":"Zack Snyder Justice League","posterURL":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg","overview":"Determined to ensure Superman ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.","releaseDate":"2021-03-18T00:00:00.000Z"},{"id":2,"title":"Welcome to Sudden Death","posterURL":"https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg","overview":"Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.","releaseDate":"2020-09-29T00:00:00.000Z"},{"id":3,"title":"Enola Holmes","posterURL":"https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg","overview":"While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.","releaseDate":"2020-09-23T00:00:00.000Z"},{"id":4,"title":"Mulan","posterURL":"https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg","overview":"When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.","releaseDate":"2020-09-04T00:00:00.000Z"}];

export default function MovieList() {
    return (
        <MainContainer>
            <Heading>
                Selecione o filme
            </Heading>
            <List>
                {movies.map((movie, index) => 
                    <Poster key={index} onClick={() => alert("aaa")}>
                        <img src={movie.posterURL} alt={movie.title} />
                    </Poster>    
                )}
            </List>
        </MainContainer>
    )
}