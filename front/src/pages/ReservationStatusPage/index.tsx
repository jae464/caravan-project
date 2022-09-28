import React, {useState, useCallback, MouseEventHandler} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StatusItem from 'components/StatusItem'
import AppLayout from 'layouts/AppLayout';
import ReservationInfoForm from 'components/ReservationInfoForm'
import {ConferenceInformationData} from 'types/ConferenceInformationData'
import ReservationForm from 'components/ReservationForm';
import e from 'express';
import ChatBotLayout from 'layouts/ChatBotLayout';
import ChatLayout from 'layouts/ChatLayout';
import UserChatLayout from 'layouts/UserChatLayout';

const ReservationStatusPage = () => {
    const name: string[] = ['1','2','3','4','5'];

    const [arr, setArr] = useState<React.ReactNode[]>([]);
  
    const getChat = (text: string) => {
        console.log(text);
        if(text == "") return;
        // setChat([...chat, text]);
        setArr([...arr, <UserChatLayout>{text}</UserChatLayout>])
    }
    const getItemInfo = (key: string):ConferenceInformationData => {
        // db에 저장된 data 가져와야함
        let tmp: ConferenceInformationData;
        tmp = { roomName:'1', conferenceName:'2', date:'3', time:'4', participant:'5', booker:'6', tel:'7'}
        return tmp
    }

    const onClickCancel = () => {
        alert("취소")
    }

    const onClickModify = () => {
        alert("수정")
    }

    const addInfo = () => {
        let tmp = getItemInfo('test')
        setArr([...arr, <ChatBotLayout><ReservationInfoForm onClickCancel={onClickCancel} onClickModify={onClickModify} conferenceInformationData={tmp}/></ChatBotLayout>])
        console.log(arr)
    }

    return (
        <>
            <AppLayout>
                

                    <ItemContainer>
                        <ChatBotLayout>
                            {name.map( e =>
                                <StatusItem onClick={addInfo} key={e} date={e} time={"민재 바보"} />
                            )}
                        </ChatBotLayout>
                        {arr.map( e => {
                            return <>{e}</>
                        })}
                    </ItemContainer>        
                
                
            </AppLayout>
            <ChatLayout getText={getChat}/>
        </>
    )
}


const ItemContainer = styled.div `
    dispaly: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid black;
`

export default ReservationStatusPage;