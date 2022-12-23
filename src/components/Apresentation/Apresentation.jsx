import { Container, Typography } from "@mui/material"
import { SocialMedias } from "../Social/Social"
import styled from "styled-components"
import webDesignImage from "../../assets/icon-web-design.png"
import { TypeWriter } from "../TypeWriter/TypeWriter"

export const Apresentation = () => {
    return (
        <Container>
            <Wrapper>
                <div className="apresentation-data">
                    <span className="text-light fs-4">Hi There! I'm</span>
                    <Typography variant="h1">Wllysses <span>Tavares</span></Typography>
                    <TypeWriter />

                    <SocialMedias />
                </div>
                <div className="apresentation-image">
                    <img src={webDesignImage} alt="Web Design Logo" />
                </div>
            </Wrapper>
        </Container>
    )
}

export const Wrapper = styled.div`
    padding: 2rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media(max-width: 1168px) {
        flex-direction: column;
    }

    img {
        max-width: 100%;
    }

    h3 {
        color: var(--white);
        font-size: 1.6rem;
        font-weight: 100;
        font-family: 'Poppins', sans-serif;
    }

    h1 {
        font-weight: 700;
        color: var(--white);
        font-family: 'Poppins', sans-serif;
        font-size: 3rem;
        text-transform: uppercase;

        span {
            color: var(--secondary-color);
        }

        @media(max-width: 573px) {
            font-size: 2.5rem;
        }

        @media(max-width: 490px) {
            font-size: 1.8rem;
        }
    }
`