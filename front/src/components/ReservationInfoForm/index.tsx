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
import { useNavigate } from 'react-router';
import { getAllReservation } from 'api/reservation';

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
    const navigate = useNavigate();

    const setItemList = async () => {
        // db에 저장된 data 가져와야함
        const reservList = await getAllReservation();
        setReservationList(reservList)
        navigate('/reservationStatus')
        // console.log(reservList)
    }


    const onClickModify = () => {
        // alert("수정")
        addComponent([<ChatBotLayout><ReservationForm info={reservation}></ReservationForm></ChatBotLayout>])
    }

    const onClickConfirm = () => {
        console.log('confirm')
        // console.log(reservationList.length)
        setItemList();
        // if (reservationList.length == 0) {
        //     addComponent([
        //         <ChatBotLayout>
        //             <ChatBotText>
        //                 예약 정보가 없습니다.
        //             </ChatBotText>
        //         </ChatBotLayout>
        //     ])
        // }
        // else{
        //     addComponent([
        //         <ChatBotLayout>
        //             <ChatBotText>
        //                 예약 상세정보를 확인하고자 할 경우 목록 선택하고, 변경 or 취소를 원하는 경우 체크박스 선택 후 버튼을 눌러주세요. (변경은 1개만 선택가능합니다.)
        //             </ChatBotText>
        //         </ChatBotLayout>,
        //         <ChatBotLayout>
        //             <TitleText>예약 현황</TitleText>
        //             <ItemContainer>
        //                 {reservationList.map( m => {
        //                     return (<StatusItem info={m}/>)
        //                 })}
        //             </ItemContainer>
        //         </ChatBotLayout>
        //     ])
        // }
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
            <TitleText>예약 정보</TitleText>
            <Container>
                <InfoTable>
                    <tbody>
                    <tr>
                        <LabelCell>회의명</LabelCell>
                        <Cell>{reservation.name}</Cell>
                    </tr>
                    <tr>
                        <LabelCell>회의실</LabelCell>
                        <Cell>{roomName}</Cell>
                    </tr>
                    <tr>
                        <LabelCell>회의일자</LabelCell>
                        <Cell>{new Date(reservation.meetingDate!).getFullYear()+'-'+(new Date(reservation.meetingDate!).getMonth()+1)+'-'+new Date(reservation.meetingDate!).getDate()}</Cell>
                    </tr>
                    <tr>
                        <LabelCell>회의시간</LabelCell>
                        <Cell>{reservation.startTime!.toString()+'~'+reservation.endTime!.toString()}</Cell>
                    </tr>
                    <tr>
                        <LabelCell>예약자</LabelCell>
                        <Cell>{reservation.userId}</Cell>
                    </tr>
                    <tr>
                        <LabelCell>연락처</LabelCell>
                        <Cell>010-0000-0000</Cell>
                    </tr>
                    <tr>
                        <LabelCell>참석자</LabelCell>
                        <Cell>{}</Cell>
                    </tr>
                    </tbody>
                </InfoTable>
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
    justify-content: center;
    // position: relative;
    flex-direction: column;
    margin: auto;
    // background: #0E0E0;
    width: 100%;
    height: 100%;
    // border: 1px solid black;
`

const Container = styled.div`
    display: flex;
    // position: relative;
    flex-direction: column;
    align-items: center;
    margin: auto;
    // margin-top: 160px;
    // background: #0E0E0;
    width: 100%;
    // border: 1px solid black;
    background: white;
    justify-content: space-around;
    // bottom: 0px;
`
const ButtonContainer = styled.div`
    display: flex;  
    width: 100%;
    margin-top: 1rem;
    flex-direction: row;
    justify-content: space-around;
    // border: 1px solid black;
`

const TitleText = styled.h3 `
    text-align: center;
    margin-top: 0px;
    margin-bottom: 10px;
    border-bottom: 1px solid #C1C1C1;
    // border: 1px solid black;
    padding-bottom: 5px;
    color: #8A8A8A;
`

const InfoTable = styled.table `
    border-spacing: 30px 5px;  
    // border: 1px solid black;
`

const Cell = styled.td `
    text-align:left;
    margin-right: 10px;
    margin-left: 0px;
    // padding-left: 10px;
    color: #565656;
    width: 10rem;
    //   border: 1px solid black;
    //   border-left: 1px solid #ACACAC;
`

const LabelCell = styled.td `
    text-align:left;
    margin-right: 10px;
    margin-left: 0px;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    // align-items: center;
    // color: #565656;
    color: black;
    width: 5rem;
    font-weight: bold;
    //   border: 1px solid black;
    border-right: 1px solid #ACACAC;
`

const ReservationStatusButton = styled.button`
    width: 8rem;
    height: 2.5rem;
    border: none;
    border-radius: 4px;
    background: #FFC3C3;
    color: white;
    font-size: 1.3rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;

    display: flex;
    text-decoration: none;
    outline: none;
    align-items: center;
    justify-content: center;

    &:hover{  
        background-color : #fd8f9e;
    }
`

const ItemContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // border: 1px solid black;
`

export default ReservationInfoForm