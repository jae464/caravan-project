import React, { MouseEventHandler, useState } from 'react'
import styled from '@emotion/styled'
import useComponentHooks from 'hooks/useComponentAdd';
import UserChatLayout from 'layouts/UserChatLayout';

type Props = {
    getText?: (text: string)=>void;
}
const ChatLayout = ({getText}: Props) => {

    const [chat, setChat] = useState("");
    const {components, setComponent, addComponent} = useComponentHooks([]);

    const onClick = (e: any) => {
        // e.preventDefault()
        e.preventDefault();
        // console.log(e.target.value);
        // getText(chat);
        addComponent([<UserChatLayout>{chat}</UserChatLayout>])
        setChat("");
        // setChat([...chat, e.target.value]);
        // console.log(e.target.value)
    }

    const onKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            console.log(e.nativeEvent.isComposing);
            if(e.nativeEvent.isComposing === true || e.previouseKey === 'Shift') return;
            e.preventDefault();
            if (chat === "") return;
            addComponent([<UserChatLayout>{chat}</UserChatLayout>])
            setChat("");
        }
    }
    const onChange = (e: any) => {
        setChat(e.target.value)
    }
  return (
    <ChatContainer>
        <MessageIcon src='http://localhost:3001/icon/messenger.png'/>
        <ChatInput 
            placeholder='입력을 해주세요.'
            onChange={onChange}
            value={chat}
            onKeyDown={onKeyDown}
        />
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