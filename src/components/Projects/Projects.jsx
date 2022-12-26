import { Container, Typography } from "@mui/material"
import gitsearch from '../../assets/gitsearch.png'
import primeflix from '../../assets/primeflix.png'
import weatherapp from '../../assets/weatherapp.png'
import fakestore from '../../assets/fakestore.png'
import coinconverter from '../../assets/coinconverter.png'
import pokedex from '../../assets/pokedex.png'
import styled from "styled-components"

export const Projects = () => {

    let projects = [
        {   
            img: gitsearch,
            name: 'GitSearch',
            description: 'Projeto criado a partir do consume da API REST do próprio Github para facilitar a busca por usuários e informações sobre o mesmo.',
            deploy: 'https://gitsearch-app.netlify.app/',
            repository: 'https://github.com/wllysses/gitsearch',
            techs: ['HTML', 'CSS', 'Javascript', 'Styled-Components', 'React-Router-DOM', 'Material UI', 'API Rest', 'Animate.CSS']
        },
        {   
            img: pokedex,
            name: 'PokeDéx',
            description: 'Projeto criado consumindo a API REST PokéAPI com o intuito de facilitar a busca e visualização de detalhes específicos sobre os mais diversos Pokemons.',
            deploy: 'https://github.com/wllysses/quest-pokedex',
            repository: 'https://github.com/wllysses/quest-pokedex',
            techs: ['HTML', 'CSS','Javascript', 'Styled-Components', 'React-Router-DOM', 'Context API', 'API Rest']
        },
        {
            img: primeflix,
            name: 'PrimeFlix',
            description: 'Sistema para visualização de detalhes de filmes dos mais diversos gêneros. Criado a partir do consumo da API REST MovieDB.',
            deploy: 'https://project-prime-flix.netlify.app/',
            repository: 'https://github.com/wllysses/project-primeflix',
            techs: ['HTML', 'CSS','Javascript', 'Styled-Components', 'React Bootstrap', 'API Rest']
        },
        {
            img: weatherapp,
            name: 'MyWeatherApp',
            description: 'Projeto criado consumindo a API OpenWeather com o intuito de facilitar a busca por informações climáticas relacionadas a cidade desejada.',
            deploy: 'https://my-weather-app2022.netlify.app/',
            repository: 'https://github.com/wllysses/myWeatherApp',
            techs: ['HTML', 'CSS','Javascript', 'Styled-Components', 'React-Router-DOM', 'API Rest']
        },
        {
            img: fakestore,
            name: 'FakeStore',
            description: 'Projeto criado consumindo a API FakeStoreApi com o intuito de simular um e-commerce com a funcionalidade de adicionar o projeto ao carrinho de compras.',
            deploy: 'https://fabrica-fake-store.vercel.app/',
            repository: 'https://github.com/wllysses/fake-store',
            techs: ['HTML', 'CSS','Javascript', 'Styled-Components', 'React-Router-DOM', 'Material UI', 'API Rest', 'Bootstrap']
        },
        {
            img: coinconverter,
            name: 'CoinConverter',
            description: 'Projeto criado consumindo uma API que retorna o valor atual de várias moedas com o intuito de simplificar a conversão de valores entre moedas estrangeiras e a moeda corrente do Brasil (BRL).',
            deploy: 'https://github.com/wllysses/coin-converter',
            repository: 'https://github.com/wllysses/coin-converter',
            techs: ['HTML', 'CSS','Javascript', 'Styled-Components', 'React-Router-DOM', 'API Rest']
        }
    ]

    return (
        <Container id="projects" className="p-3">
            <ProjectsWrapper>
                <h2 className="text-light fw-bold text-uppercase text-center fs-1">Projetos</h2>
                <div className="projects">
                    {
                        projects.map((projectData, index) => {
                            return (
                                <div className="project" key={index}>
                                    <div className="project-img">
                                        <img src={projectData.img} alt="" />
                                        <div className="project-info">
                                            <div className="techs">
                                                <Typography variant="h5" marginBottom={1} fontWeight='bold'>Tecnologias e Bibliotecas</Typography>
                                                <ul className="p-0">
                                                    {
                                                        projectData.techs.map((tech, index) => {
                                                            return (
                                                                <li key={index}>{tech}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-data">
                                        <Typography variant="h4" fontWeight={700}>{projectData.name}</Typography>
                                        <Typography paragraph align="justify">{projectData.description}</Typography>
                                    </div>
                                    <div className="project-links d-flex gap-1">
                                        <button className="btn btn-primary">
                                            <a href={projectData.deploy} target="_blank" rel="noopener noreferrer" className="page-link">Deploy</a>
                                        </button>
                                        <button className="btn btn-primary">
                                            <a href={projectData.repository} target="_blank" rel="noopener noreferrer" className="page-link">Repositório</a>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </ProjectsWrapper>
        </Container>
    )
}

const ProjectsWrapper = styled.div`
    min-height: 100vh;
    padding-top: 100px;

    .projects {
        margin-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;

        .project {
            width: 100%;
            min-height: 500px;
            color: var(--white);
            box-shadow: 0 5px 20px var(--secondary-color);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            .project-img  {
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    max-width: 50%;
                }

                @media(max-width: 950px) {
                    flex-direction: column;

                    img {
                    max-width: 100%;
                }
                }
            }

            .project-data {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem
            }

            .project-links {
                button {

                    a {
                        position: static;
                    }
                }
            }
        }
    }
`