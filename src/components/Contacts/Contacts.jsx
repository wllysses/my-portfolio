import { Container } from "@mui/system"
import { useState } from "react"
import emailjs from '@emailjs/browser'
import styled from "styled-components"

export const Contacts = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        
        emailjs.send('service_6jr6pub', 'template_27e3arl', templateParams, 'OD4J6KQdrOkBQH4jq')
        .then((response) => {
            if(response.status == 200) {
                alert('E-mail enviado com sucesso!')
                setName('')
                setEmail('')
                setMessage('')
            }
            
        })
        .catch(err => {
            console.log('Error: ' + err)
        })
    }

    return (
        <Container id="contacts">
            <ContactsWrapper>
                <h2 className="text-light fw-bold text-uppercase text-center fs-1">Contato</h2>
                <div className="form-responsive mt-5">
                    <form onSubmit={sendEmail}>
                        <div className="form-floating">
                            <input 
                            type="text" 
                            id="inputName" 
                            className="form-control" 
                            placeholder="Digite seu nome" 
                            onChange={(e) => setName(e.target.value)}
                            required/>
                            <label htmlFor="inputName" className="form-label">Digite seu nome</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input 
                            type="email" 
                            id="inputEmail" 
                            className="form-control" 
                            placeholder="Digite seu e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                            <label htmlFor="inputEmail" className="form-label">Digite seu e-mail</label>
                        </div>
                        <div className="form-floating mt-3">
                            <textarea 
                            className="form-control" 
                            placeholder="Digite sua mensagem" 
                            id="inputTextArea" 
                            style={{height: 150}} 
                            onChange={(e) => setMessage(e.target.value)}
                            required />
                            <label htmlFor="inputTextArea" className="form-label">Digite sua mensagem</label>
                        </div>
                        <div className="button-submit mt-3">
                            <button className="btn btn-primary w-100" type="subtmit">Enviar</button>
                        </div>
                    </form>
                </div>
            </ContactsWrapper>
        </Container>
    )
}

const ContactsWrapper = styled.div`
    min-height: 80vh;
    padding-top: 100px;
`