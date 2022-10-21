import React, { MouseEventHandler, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Reservation } from 'types/reservation'
import { getRoomById } from "api/meetingRoom";

import useComponentHooks from 'hooks/useComponentAdd';
import ChatBotLayout from 'layouts/ChatBotLayout';
import CancelForm from 'components/CancelForm';
import ReservationForm from 'components/ReservationForm';
import useReservationListHooks from 'hooks/useReservationList';
import ChatBotText from 'design/ChatBotText';
import StatusItem from 'components/StatusItem';

type Props = {
    // conferenceInformationData: ConferenceInformationData,
    // onClickCancel: () => void,
    // onClickModify: () => void
    reservation: Reservation
}

const ReservationInfoForm = ({reservation}: Props): JSX.Element => {

    const {reservationList, setReservationList, addReservation} = useReservationListHooks([]);
    const {components, setComponent, addComponent} = useComponentHooks([]);
    const [roomName, setRoomName] = useState("");

    const onClickModify = () => {
        // alert("수정")
        addComponent([<ChatBotLayout><ReservationForm info={reservation}></ReservationForm></ChatBotLayout>])
    }

    const onClickConfirm = () => {
        console.log('confirm')
        console.log(reservationList.length)
        if (reservationList.length == 0) {
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
                        {reservationList.map( m => {
                            return (<StatusItem info={m}/>)
                        })}
                    </ItemContainer>
                </ChatBotLayout>
            ])
        }
    }
 
    const onClickCancel = () => {
        // alert("삭제")
        addComponent([<ChatBotLayout><CancelForm id={reservation.id!}/></ChatBotLayout>])
    }

    const getRoomName = async () => {
        const res = await getRoomById(reservation.meetingRoomId!);
        console.log(res);
        setRoomName(res.name);
    }

    useEffect(()=>{
        getRoomName();
    },[]);

    return (
        <MainContainer>
            <Container>
                <table>
                    <thead>
                        <h2>예약 정보</h2>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <span>회의실명</span>{roomName}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>회의 제목</span>{reservation.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {/* <span>회의 일자</span>{reservation.meetingDate} */}
                        </td>
                        <td>
                            <span>회의 시간</span>{reservation.startTime}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>예약자</span>{reservation.userId}
                        </td>
                        <td>
                            <span>참석자</span>{}
                        </td>
                    </tr>
                    <tr>
                        <span>연락처</span>{}
                    </tr>
                    </tbody>
                </table>
            </Container>
            <ButtonContainer>
                <ReservationStatusButton onClick={onClickModify}>변경</ReservationStatusButton>
                <ReservationStatusButton onClick={onClickConfirm}>확인</ReservationStatusButton>
                <ReservationStatusButton onClick={onClickCancel}>삭제</ReservationStatusButton>
            </ButtonContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    margin: auto;
    // background: #0E0E0;
    width: 100%;
    height: 100%;
    // border: 1px solid black;
    // justify-content: space-;
`

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    margin: auto;
    // margin-top: 160px;
    // background: #0E0E0;
    width: 40%;
    // border: 1px solid black;
    justify-content: space-around;
    // bottom: 0px;
`
const ButtonContainer = styled.div`
    display: flex;  
    width: 60%;
    margin-top: 2rem;
    flex-direction: row;
    justify-content: space-around;
`

const ReservationStatusButton = styled.button`
    display: flex;
    text-decoration: none;
    font-size: 1rem;
    outline: none;
    height: 3rem;
    width: 8rem;
    color: white;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
    // margin-bottom: 4rem;
    background: #A5B5EC;

    margin-bottom: 10px;
    border-radius: 5px;
`

const ItemContainer = styled.div `
    dispaly: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // border: 1px solid black;
`

export default ReservationInfoForm