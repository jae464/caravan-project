import React, {useState, useCallback, MouseEventHandler, useEffect} from 'react';
import styled from "@emotion/styled";

import { Reservation } from 'types/reservation'

import AppLayout from 'layouts/AppLayout';
import ChatBotLayout from 'layouts/ChatBotLayout';
import ChatLayout from 'layouts/ChatLayout';
import StatusItem from 'components/StatusItem'

import ChatBotText from "design/ChatBotText";

import useAutoScroll from "hooks/useAutoScroll";
import useComponentHooks from "hooks/useComponentAdd";
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import useReservationListHooks from 'hooks/useReservationList';

import { getAllReservation } from "api/reservation";
import reservationListAtom, { ReservationList } from 'recoil/reservationStatusPage/atom';

const ReservationStatusPage = () => {
    // const [reservationList, setReservationList] = useState<Reservation[]>([{ id:0, userId:1, roomId:2, name:'3', meetingDate: new Date(), startTime:5, endTime:6}]);

    const {reservationList, setReservationList, addReservation} = useReservationListHooks([]);
    const {components, setComponent, addComponent} = useComponentHooks([]);
    const [scrollRef, scrollToBottom] = useAutoScroll();
    const [flag, setFlag] = useState(false);
    const resetRervRecoil = useResetRecoilState(reservationListAtom);
      
    const setItemList = async () => {
        // db에 저장된 data 가져와야함
        const reservList = await getAllReservation();
        console.log(reservList)
        setReservationList(reservList)
        console.log(reservationList)
        setFlag(true);
    }
  
    const initComponents = async () => {
        console.log(reservationList)
        console.log('initComponents', flag)
        if (reservationList.length == 0 && flag) {
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
                        <TitleText>예약 현황</TitleText>
                        {reservationList.map( m => {
                            return (<StatusItem info={m}/>)
                        })}
                    </ItemContainer>
                </ChatBotLayout>
            ])
        }
    }
    useEffect(()=>{
        console.log('첫번째 useEffect')
        setItemList();
    },[]);

    useEffect(()=>{
        if (!flag) return;
        initComponents();
    },[flag, reservationList]);

    useEffect(()=>{
      scrollToBottom()
    },[components]);  

    return (
        <>
            <AppLayout>
                <div ref={scrollRef}>
                {components && <></>} 
                    {flag && components.components.map(v=>{
                        return (
                            <>
                                {v}
                            </>
                        )
                    })}
                </div>
            </AppLayout>
            <ChatLayout />
            <button onClick={resetRervRecoil}>리코일초기화</button>
        </>
    )
}


const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // border: 1px solid black;
`

const ItemContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // border: 1px solid black;
`

const TitleText = styled.h3 `
    text-align: center;
    margin-top: 0px;
    margin-bottom: 10px;
    border-bottom: 1px solid #C1C1C1;
    padding-bottom: 5px;
    color: #8A8A8A;
`

export default ReservationStatusPage;