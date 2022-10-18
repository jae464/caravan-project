import styled from '@emotion/styled'
import React, { MouseEventHandler, useState } from 'react'
import { Reservation } from 'types/reservation'

import useComponentHooks from 'hooks/useComponentAdd';
import ReservationInfoForm from 'components/ReservationInfoForm';
import ChatBotLayout from 'layouts/ChatBotLayout';
import ChatBotText from 'design/ChatBotText';

type Props = {
  reservation: Reservation
}

const StatusItem = ({reservation}:Props): JSX.Element => {
  var arrDayStr = ['일','월','화','수','목','금','토'];

  const [info, setInfo] = useState("");
  const {components, setComponent, addComponent} = useComponentHooks([]);


  const addInfoItem = (e: any) => {
    // 클릭한 item의 key에 따라 컴포넌트 추가
    e.preventDefault();
    addComponent([
      <ChatBotLayout><ChatBotText>선택한 회의실의 예약 세부 정보를 확인하세요.</ChatBotText></ChatBotLayout>,
      <ChatBotLayout><ReservationInfoForm reservation={reservation}/></ChatBotLayout>
    ])
  }

  const dDay = (date: Date):string => {
    console.log(typeof(date));
    const today = new Date()

    const diff = date.getTime() - today.getTime();
    const result = Math.floor(diff / (1000 * 60 * 60 * 24));
    // console.log(diff);
    if (result < 0 && result >= -1) {
      return 'Today';
    }
    else if (result >= 0) {
      return 'D-' + (result+1).toString();
    }
    else {
      return 'D+' + ((result+1)*-1).toString();
    }
  }

  return (
    <Container onClick={addInfoItem}>
      <input type='checkbox'/>
      <span>{dDay(new Date(reservation.meetingDate!))}</span>
        <Content>{new Date(reservation.meetingDate!).getFullYear()+'-'+(new Date(reservation.meetingDate!).getMonth()+1)+'-'+new Date(reservation.meetingDate!).getDate()} {reservation.startTime!.toString()}</Content>
    </Container>
  )
}

const Container = styled.div `
    dispaly: flex;
    flex-direction: column;
    width: 100%;
    // border: 1px solid black;
`

const Content = styled.h2`
    // border: 1px solid black;
    background: white;
    cursor: pointer;
    color: black;
    padding: 2rem;
`

export default StatusItem;