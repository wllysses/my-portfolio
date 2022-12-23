import { Menu } from "../Menu/Menu"
import styled from "styled-components"

export const Header = () => {
    return (
        <HeaderWrapper id="apresentation">
            <header>
                <Menu />
            </header>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    padding: 1rem;
    position: fixed;
    width: 100%;

    header {
        display: flex;
        justify-content: center;
    }
`