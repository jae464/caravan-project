import React, {useState, useCallback, MouseEventHandler, useEffect} from 'react';
import styled from 'styled-components';
import StatusItem from 'components/StatusItem'
import AppLayout from 'layouts/AppLayout';
import ReservationInfoForm from 'components/ReservationInfoForm'
import {ConferenceInformationData} from 'types/ConferenceInformationData'
import ReservationForm from 'components/ReservationForm';
import ChatBotLayout from 'layouts/ChatBotLayout';
import ChatLayout from 'layouts/ChatLayout';
import UserChatLayout from 'layouts/UserChatLayout';
import CancelForm from 'components/CancelForm';
import { useRecoilState, useRecoilValue } from 'recoil';
import { testAtom } from 'recoil/test';

const ReservationStatusPage = () => {
    const name: string[] = ['1','2','3','4','5'];

    const [arr, setArr] = useState<React.ReactNode[]>([]);
    const [test, setTest] = useRecoilState(testAtom);
    const test2 = useRecoilValue(testAtom);
    useEffect(()=>{
        console.log(test2);
    },[])
    const getChat = (text: string) => {
        console.log(text);
        console.log(arr);
        if(text == "") return;
        // setChat([...chat, text]);
        setArr([...arr, <UserChatLayout>{text}</UserChatLayout>])
        console.log(arr);
    }

    const getItemInfo = (key: string):ConferenceInformationData => {
        // db에 저장된 data 가져와야함
        let tmp: ConferenceInformationData;
        tmp = { roomName:'1', conferenceName:'2', date:'3', time:'4', participant:'5', booker:'6', tel:'7'}
        return tmp
    }

    const onClickCancel = (arr: React.ReactNode[]) => {
        setArr([...arr, (<ChatBotLayout>2</ChatBotLayout>)])
        console.log(arr);
        // alert("취소")
    }

    const onClickModify = () => {
        console.log("수정")
        console.log(arr);
        setArr([...arr, <ChatBotLayout><ReservationForm /></ChatBotLayout>])
        // alert("수정")
    }

    const addInfo = () => {
        let tmp = getItemInfo('test')
        // setArr([...arr, <ChatBotLayout><ReservationInfoForm onClickCancel={() => onClickCancel(arr)} onClickModify={onClickModify} conferenceInformationData={tmp}/></ChatBotLayout>])
        console.log(arr)
    }

    return (
        <>
            <AppLayout>
                <MainContainer>
                    <ChatBotLayout>
                        <ItemContainer>
                            {name.map( m => {

                                return (<StatusItem onClick={addInfo} key={m} date={m} time={"민재 바보"} />)
                                // return (<div>{m}</div>)
                            })}
                        </ItemContainer>
                    </ChatBotLayout>
                    {arr.map( e => {
                        console.log(e)
                        return <>{e}</>
                    })}       
                </MainContainer>
            </AppLayout>
            <ChatLayout getText={getChat}/>
            <button onClick={() => {
                console.log(arr)
                addInfo()
            }}>확인</button>
        </>
    )
}


const MainContainer = styled.div `
    dispaly: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // border: 1px solid black;
`

const ItemContainer = styled.div `
    dispaly: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // border: 1px solid black;
`

export default ReservationStatusPage;