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
                        <div>
                            <label htmlFor="inputName" className="form-label text-light">Digite seu nome</label>
                            <input 
                            type="text" 
                            id="inputName" 
                            className="form-control" 
                            placeholder="Nome" 
                            onChange={(e) => setName(e.target.value)}
                            required/>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="inputEmail" className="form-label text-light">Digite seu e-mail</label>
                            <input 
                            type="email" 
                            id="inputEmail" 
                            className="form-control" 
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="inputTextArea" className="form-label text-light">Digite sua mensagem</label>
                            <textarea 
                            className="form-control" 
                            placeholder="Mensagem" 
                            id="inputTextArea" 
                            style={{height: 150}} 
                            onChange={(e) => setMessage(e.target.value)}
                            required />
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