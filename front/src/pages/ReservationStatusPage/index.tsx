import React, {useState, useCallback, MouseEventHandler, useEffect} from 'react';
import styled from "@emotion/styled";

import { Reservation } from 'types/reservation'

import AppLayout from 'layouts/AppLayout';
import ChatBotLayout from 'layouts/ChatBotLayout';
import ChatLayout from 'layouts/ChatLayout';
import UserChatLayout from 'layouts/UserChatLayout';
import StatusItem from 'components/StatusItem'
import ReservationForm from 'components/ReservationForm';
import CancelForm from 'components/CancelForm';
import ReservationInfoForm from 'components/ReservationInfoForm'

import ChatBotText from "design/ChatBotText";

import useAutoScroll from "hooks/useAutoScroll";
import useComponentHooks from "hooks/useComponentAdd";
import { useRecoilState, useRecoilValue } from 'recoil';
import e from 'express';

const ReservationStatusPage = () => {
    const [reservationList, setReservationList] = useState<Reservation[]>([]);

    const {components, setComponent, addComponent} = useComponentHooks([]);
    const [scrollRef, scrollToBottom] = useAutoScroll();
    
    const onClick = (info: Reservation) => {
      addComponent([<ChatBotLayout><ReservationInfoForm reservation={info}/></ChatBotLayout>]);
      console.log(components);
    }
  
    const getItemInfo = (key: string):Reservation => {
        // db에 저장된 data 가져와야함
        let tmp: Reservation;
        tmp = { userId:1, roomId:2, name:'3', meetingDate: new Date(4), startTime:5, endTime:6}
        return tmp
    }    

    useEffect(()=>{
      initComponents();
    },[]);
  
    const initComponents = async () => {
        console.log(reservationList?.length)
        if (reservationList?.length == 0) {
            addComponent([
                <ChatBotLayout>
                    <ChatBotText>
                        예약 정보가 없습니다.
                    </ChatBotText>
                </ChatBotLayout>
            ])
        }
        else{
            addComponent([
                <ChatBotLayout>
                    <ChatBotText>
                        예약 상세정보를 확인하고자 할 경우 목록 선택하고, 변경 or 취소를 원하는 경우 체크박스 선택 후 버튼을 눌러주세요. (변경은 1개만 선택가능합니다.)
                    </ChatBotText>
                </ChatBotLayout>,
                <ChatBotLayout>
                    <ItemContainer>
                        {reservationList!.map( m => {
                            return (<StatusItem reservation={m}/>)
                        })}
                    </ItemContainer>
                </ChatBotLayout>
            ])
        }
    }
  
    useEffect(()=>{
      scrollToBottom()
    },[components]);  

    return (
        <>
            <AppLayout>
                <div ref={scrollRef}>
                    {components.components.map(v=>{
                        return (
                            <>
                                {v}
                            </>
                        )
                    })}
                </div>
            </AppLayout>
            <ChatLayout />
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