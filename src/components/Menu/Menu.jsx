import styled from "styled-components"

export const Menu = () => {
    return (
        <>
            <NavBar className="navbar navbar-dark w-100">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li><a href="#">Home</a></li>
                                <li><a href="#about-me">Sobre mim</a></li>
                                <li><a href="#techs">Tecnologias</a></li>
                                <li><a href="#projects">Projetos</a></li>
                                <li><a href="#contacts">Contatos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </NavBar>
        </>
    )
}

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .navbar-brand {
        font-weight: 700;
        font-size: 1.5rem;
    }

    ul {
        gap: 1rem;
        li {
            a {
                color: var(--white);
                text-decoration: none;
            }

            &:hover {
                text-decoration: underline;
            }
        }
    }
`