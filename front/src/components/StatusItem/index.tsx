import styled from '@emotion/styled'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import { Reservation } from 'types/reservation'

import useComponentHooks from 'hooks/useComponentAdd';
import ReservationInfoForm from 'components/ReservationInfoForm';
import ChatBotLayout from 'layouts/ChatBotLayout';
import ChatBotText from 'design/ChatBotText';
import { reservationAtom } from 'recoil/reservation/atom';
import { useRecoilState } from 'recoil';
import { getRoomById } from 'api/meetingRoom';

type Props = {
  info: Reservation
}

const StatusItem = ({info}:Props): JSX.Element => {
  var arrDayStr = ['일','월','화','수','목','금','토'];

  const {components, setComponent, addComponent} = useComponentHooks([]);
  const [reservation, setReservation] = useRecoilState(reservationAtom);
  const [roomName, setRoomName] = useState("");

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

  const getRoomName = async (meetingRoomId: number) => {
    const res = await getRoomById(meetingRoomId);
    console.log(res);
    setRoomName(res.name);
}

  const dDay = (date: Date):number => {
    // console.log(typeof(date));
    const today = new Date()

    const diff = date.getTime() - today.getTime();
    const result = Math.floor(diff / (1000 * 60 * 60 * 24));
    // console.log(diff);
    return result;
  }

  const dDayStr = (result: number) => {
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

  useEffect(()=>{
    getRoomName(info.meetingRoomId!);
  },[]);


  return (
    <Container onClick={addInfoItem}>
      <ContentWrapper>
        {/* <input type='checkbox'/> */}
        <Dday day={dDay(new Date(info.meetingDate!))}>{dDayStr(dDay(new Date(info.meetingDate!)))}</Dday>
        <Content>
          <InfoTable>
            <tbody>
              <tr>
                <Cell>{new Date(info.meetingDate!).getFullYear()+'-'+(new Date(info.meetingDate!).getMonth()+1)+'-'+new Date(info.meetingDate!).getDate()}</Cell>
                <Cell>{info.startTime!.toString()+'~'+info.endTime!.toString()}</Cell>
              </tr>
              <tr>
                <Cell>{info.name}</Cell>
                <Cell>{roomName}</Cell>
              </tr>
            </tbody>
          </InfoTable>
        </Content>
      </ContentWrapper>
    </Container>
  )
}

const Container = styled.div `
  display : flex;
  // align-item: center;
  justify-content: center;
  // flex-direction: column;
  width: 100%;
  // border: 1px solid black;
  // border-bottom:1px solid gray;
  cursor: pointer;
  background: white;
  
  // margin: 0.5rem auto;
`

const ContentWrapper = styled.div `
  display : flex;
  justify-content: flex-start;
  // justify-content: space-around;
  align-items: center;
  // align-content: center;
  // flex-direction: row;
  width: 90%;
  border-bottom:1px solid #C1C1C1;

  cursor: pointer;
  background: white;

  margin-bottom: 0.1rem;
  maring-top: 0.1rem;
  margin-left: 0px;
  margin-right: 0px;
  padding: 0px;
`

const Dday = styled.span <{day: number}>`
  border-radius: 15px;
  // align-items: center;
  width: 55px;
  // height: 25px;
  text-align:center;
  padding: 3px;
  // border: 1px solid black;
  // margin-right: 0.5rem;
  // margin-left: 0.3rem;
  margin-bottom: 0.1rem;
  color: white;
  font-weight: bold;
  background: ${(props) => props.day >= 7 ? 'gray' : (props) => props.day >= 0 ? '#FFC3C3' : '#FD8E9E'};
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  color: black;
  width: 80%;
  // border-bottom:1px solid gray;
  // border: 1px solid black;
  margin-bottom: 0.1rem;
  // text-align:center;
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
  // border: 1px solid black;
`

export default StatusItem;