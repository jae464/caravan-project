import styled from '@emotion/styled'
import React, { MouseEventHandler, useState } from 'react'
import { Reservation } from 'types/reservation'

import useComponentHooks from 'hooks/useComponentAdd';
import ReservationInfoForm from 'components/ReservationInfoForm';
import ChatBotLayout from 'layouts/ChatBotLayout';
import ChatBotText from 'design/ChatBotText';
import { reservationAtom } from 'recoil/reservation/atom';
import { useRecoilState } from 'recoil';

type Props = {
  info: Reservation
}

const StatusItem = ({info}:Props): JSX.Element => {
  var arrDayStr = ['일','월','화','수','목','금','토'];

  const {components, setComponent, addComponent} = useComponentHooks([]);
  const [reservation, setReservation] = useRecoilState(reservationAtom);

  const addInfoItem = (e: any) => {
    // 클릭한 item의 key에 따라 컴포넌트 추가
    e.preventDefault();
    setReservation({
      id: info.id,
      meetingRoomId: info.meetingRoomId,
      name: info.name,
      meetingDate: info.meetingDate,
      startTime: info.startTime,
      endTime: info.endTime
    });
    addComponent([
      <ChatBotLayout><ChatBotText>선택한 회의실의 예약 세부 정보를 확인하세요.</ChatBotText></ChatBotLayout>,
      <ChatBotLayout><ReservationInfoForm reservation={info}/></ChatBotLayout>
    ])
  }

  const dDay = (date: Date):string => {
    // console.log(typeof(date));
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
      <span>{dDay(new Date(info.meetingDate!))}</span>
        <Content>{new Date(info.meetingDate!).getFullYear()+'-'+(new Date(info.meetingDate!).getMonth()+1)+'-'+new Date(info.meetingDate!).getDate()} {info.startTime!.toString()}</Content>
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