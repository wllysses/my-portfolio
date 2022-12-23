import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from 'styled-components';

export const SocialMedias = () => {
    return (
        <SocialMedia>
            <a href="https://github.com/wllysses" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/wllysses-tavares-29a9a7223/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            <a href="https://www.instagram.com/wllyssesjr/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://twitter.com/wllyssespaz_" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
        </SocialMedia>
    )
}

const SocialMedia = styled.div`
    display: flex;
    gap: 1rem;
    color: var(--white);
    cursor: pointer;
    margin-top: 1rem;

    a {
        color: var(--white);
    }

    svg:hover {
        color: var(--secondary-color);
    }
`