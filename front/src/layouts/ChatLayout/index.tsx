import React, { MouseEventHandler, useState } from 'react'
import styled from '@emotion/styled'

type Props = {
    getText: (text: string)=>void;
}
const ChatLayout = ({getText}: Props) => {

    const [chat, setChat] = useState("");


    const onClick = (e: any) => {
        // e.preventDefault()
        e.preventDefault();
        // console.log(e.target.value);
        getText(chat);
        setChat("");
        // setChat([...chat, e.target.value]);
        // console.log(e.target.value)
    }

    const onKeyUp = (e: any) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            getText(chat);
            setChat("");
        }
    }
    const onChange = (e: any) => {
        setChat(e.target.value)
        //
    }
  return (
    <ChatContainer>
        <MessageIcon src='http://localhost:3001/icon/messenger.png'/>
        <ChatInput placeholder='입력을 해주세요.' onChange={onChange} value={chat} onKeyUp={onKeyUp}/>
        <SendIcon onClick={onClick} src='http://localhost:3001/icon/send.png'/>
    </ChatContainer> 
  )
}

const ChatContainer = styled.div`
    display: flex;
    width: 800px;
    // position: absolute;
    // width: 80%;
    // margin-top: -1rem;
    height: 2.6rem;
    // border: none;
    // overflow: scroll;
    bottom: 0px;
    padding: 0px;
    flex-direction: row;
    margin: -1rem auto;
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