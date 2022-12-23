import { Container } from "@mui/system"
import styled from "styled-components"

export const AboutMe = () => {
    return (
        <Container id="about-me">
            <AboutMeWrapper>
                <h2 className="text-light fw-bold text-uppercase text-center fs-1">Sobre mim</h2>
                <div className="aboutMe-data">
                    <div className="aboutMe-info">
                        <p>
                            Olá! Me chamo Wllysses Tavares e sou estudante de Sistemas para Internet e Desenvolvedor Front-end. Formado em Educação Física (Lic./Bel.) atuei durante 6 anos como professor da educação básica, porém desde criança sempre fui apaixonado por tecnologia. E essa paixão me faz sempre querer aprender mais e melhorar a cada dia, além de encorajar a tomar a grande decisão de migrar de área, me aventurar e realizar o meu sonho no fantástico mundo da TI.
                        </p>
                        <p>
                            Vi no Desenvolvimento Web uma forma de me expressar e demonstrar todo o meu conhecimento, tendo certeza que posso contribuir em qualquer área com as minhas habilidades.
                        </p>
                        <p>
                            Além de tecnologia, gosto bastante de jogos, gastronomia, natureza e principalmente de novos desafios.
                        </p>
                    </div>

                    <div className="buttons">
                        <button className="btn btn-primary">
                            <a href="https://drive.google.com/file/d/1HZ4ZRy5T4jXeR2aaWPGeOVU4XgPtbOi-/view" className="page-link" target="_blank">
                                Meu Currículo
                            </a>
                        </button>
                    </div>

                </div>
            </AboutMeWrapper>
        </Container>
    )
}

const AboutMeWrapper = styled.div`
    min-height: 80vh;
    padding-top: 100px;

    h2 {
        margin-bottom: 3rem;
    }

    p {
        color: var(--white);
        text-align: justify;
        font-size: 1.5rem;
        letter-spacing: 1px;
        text-indent: 2.5rem;
        margin-bottom: 1rem;
    }

    .buttons {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }
`