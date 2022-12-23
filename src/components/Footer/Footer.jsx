import styled from "styled-components"

export const Footer = () => {
    return (
        <FooterWrapper>
            <footer>
                <p>Desenvolvido por <strong>Wllysses Tavares</strong></p>
            </footer>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    padding: 1rem;
    background-color: var(--secondary-color);

    footer {
        display: flex;
        justify-content: center;
        color: var(--white);
    }

`