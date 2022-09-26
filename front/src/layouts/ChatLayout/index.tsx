import React, { useState } from 'react'
import styled from '@emotion/styled'
const ChatLayout = () => {

    const [chat, setChat] = useState([]);

    const onClick = (e: any) => {
        e.preventDefault()
        console.log(e.target.value);
        // setChat([...chat, e.target.value]);
        // console.log(e.target.value)
    }

    const onChange = (e: any) => {
        e.preventDefault();
    }
  return (
    <ChatContainer>
        <MessageIcon src='http://localhost:3001/icon/messenger.png'/>
        <ChatInput placeholder='입력을 해주세요.' onChange={onChange}/>
        <SendIcon onClick={onClick} src='http://localhost:3001/icon/send.png'/>
    </ChatContainer> 
  )
}

const ChatContainer = styled.div`
    display: flex;
    // position: absolute;
    width: 100%;
    height: 2.6rem;
    // border: none;
    // overflow: scroll;
    bottom: 0px;
    padding: 0px;
    flex-direction: row;
    align-items: center;
    border: 1px solid #BEBEBE;
    background: white;
    justify-content: space-between;
    // z-index: 1;

`
const MessageIcon = styled.img`
    height: 60%;
    margin-left: 1rem;
    padding: 0px;
`
const ChatInput = styled.input`
    // display: inline-block;
    width: 80%;
    height: 90%;
    font-size: 1rem;
    padding: 0px;
    border: none;
    // bottom: 0px;
`
const SendIcon = styled.img`
    height: 60%;
    margin-right: 1rem;
    padding: 0px;
    // border: 1px solid yellow;
`

export default ChatLayout;