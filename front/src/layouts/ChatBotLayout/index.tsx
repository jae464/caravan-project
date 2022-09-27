import React from 'react'
import styled from '@emotion/styled'
import 'react-calendar/dist/Calendar.css';
const ChatBotLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
        <Container>
            <ChatbotImage src='http://localhost:3001/icon/bear.png' />
            <ChatbotContent>
                <ChatbotNickname>곰돌이</ChatbotNickname>
                <Content>{children}</Content>
            </ChatbotContent>
        </Container>
    </>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2rem;
    // overflow: scroll;
    // border: 1px solid black;
    // background: black;
`

const ChatbotImage = styled.img`
    background: rgb(232, 232, 232, 90%);
    padding: 0.3rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    // margin: 3rem;
`

const ChatbotContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0px;
    margin-left: 1rem;
`

const ChatbotNickname = styled.div`
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
`

const Content = styled.div`
    display: flex;
    width: 60%;
    padding: 1rem;
    border-radius: 0.3rem;
    background-color: #EFEFEF; 
    align-items: center;
    // justify-content: center;
    // border: 1px solid black;
`
export default ChatBotLayout