import React from 'react'
import styled from '@emotion/styled'

const ChatBotLayout = () => {
  return (
    <>
        <Container>
            <ChatbotImage src='http://localhost:3001/icon/bear.png' />
            <ChatbotContent>
                <ChatbotNickname>곰돌이</ChatbotNickname>
                <Content>채팅 내용</Content>
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
`

const Content = styled.div`
    width: 80%;
    height:2rem;
    padding: 0.4rem;
    border-radius: 0.3rem;
    background-color: #EFEFEF; 
    // border: 1px solid black;
`
export default ChatBotLayout