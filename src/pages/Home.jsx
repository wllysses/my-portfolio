import { Header } from "../components/Header/Header"
import { Apresentation } from "../components/Apresentation/Apresentation"
import { AboutMe } from "../components/AboutMe/AboutMe"
import { FloatingButton } from "../components/FloatingButton/FloatingButton"
import { Projects } from "../components/Projects/Projects"
import { Contacts } from "../components/Contacts/Contacts"
import { Footer } from "../components/Footer/Footer"
import { Techs } from "../components/Techs/Techs"

export const Home = () => {
    return (
        <>
            <Header />
            <Apresentation />
            <AboutMe />
            <Techs />
            <Projects />
            <Contacts />
            <Footer />
            <FloatingButton />
        </>
    )
}