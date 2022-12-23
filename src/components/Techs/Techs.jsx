import { Container } from "@mui/system"
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGithub } from 'react-icons/fa'
import { DiGit } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import styled from "styled-components"

export const Techs = () => {
    return (
        <Container id="techs">
            <TechsWrapper>
                <h2 className="text-light fw-bold text-uppercase text-center fs-1">Tecnologias</h2>
                <div className="techs mt-5">
                    <div className="tech">
                        <FaHtml5 color="white" size={80}/>
                        <span>HTML</span>
                    </div>
                    <div className="tech">
                        <FaCss3Alt color="white" size={80}/>
                        <span>CSS</span>
                    </div>
                    <div className="tech">
                        <SiJavascript color="white" size={80}/>
                        <span>Javascript</span>
                    </div>
                    <div className="tech">
                        <FaReact color="white" size={80}/>
                        <span>React</span>
                    </div>
                    <div className="tech">
                        <FaSass color="white" size={80}/>
                        <span>SASS</span>
                    </div>
                    <div className="tech">
                        <DiGit color="white" size={80}/>
                        <span>Git</span>
                    </div>
                    <div className="tech">
                        <FaGithub color="white" size={80}/>
                        <span>Github</span>
                    </div>
                </div>
            </TechsWrapper>
        </Container>
    )
}

const TechsWrapper = styled.div`
    min-height: 50vh;
    padding-top: 100px;

    .techs {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3rem;

        .tech {
            border: 2px solid var(--secondary-color);
            padding: 1rem;
            border-radius: 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;

            span {
                color: var(--white);
                font-size: 1.2rem;
            }
        }
    }
`