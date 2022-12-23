import { FloatingWhatsApp } from 'react-floating-whatsapp'

export const FloatingButton = () => {
    return (
        <FloatingWhatsApp
            phoneNumber="+5583988745654"
            accountName="Wllysses Tavares"
            allowEsc
            allowClickAway
            notification
            notificationSound
            avatar='https://lh3.googleusercontent.com/a/AEdFTp6P33H4NFaVH06at67NKUCgcS0OzAcOxKRTyIfFCA=s83-c-mo'
            statusMessage='Online'
            chatMessage='Olá. Tudo bem?'
            placeholder='Escreva uma mensagem'
        />
    )
}