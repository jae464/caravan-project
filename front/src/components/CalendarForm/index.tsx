import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import styled from '@emotion/styled';
import moment from 'moment';
import Select from 'react-select';
import useComponentHooks from 'hooks/useComponentAdd';
import { time_range } from 'utils/consts';
import ChatBotLayout from 'layouts/ChatBotLayout';
import MeetingRoomForm from 'components/MeetingRoomForm';
import ChatBotText from 'design/ChatBotText';
import ReservationForm from 'components/ReservationForm';
import { useRecoilState } from 'recoil';
import { reservationAtom } from 'recoil/reservation/atom';

const CalendarForm = () => {
    const [value, setValue] = useState(new Date());
    const {addComponent} = useComponentHooks([]);
    const [reservation, setReservation] = useRecoilState(reservationAtom);

    // 이미 지난 날짜인지 확인
    const checkDateValidation = () => {
        const today = new Date();
        console.log("입력받은 날짜 : ", value, "오늘 날짜 : ", today);
        if(value.getFullYear() < today.getFullYear() || 
        (value.getFullYear() === today.getFullYear() && value.getMonth() < today.getMonth())
        || (value.getFullYear() === today.getFullYear() && value.getMonth() === today.getMonth() &&
        value.getDate() < today.getDate())) {
            console.log("이미 지난 날짜입니다.");
            return false;
        }
        setReservation(prev => ({
            ...prev,
            meetingDate: value
        }))
        return true;
    }

    const onClick = () => {
        console.log(value);
        console.log(`reservation ${reservation.meetingDate}`);
        if(!reservation.roomId || !reservation.meetingDate || !reservation.startTime ||
            !reservation.endTime) {
                alert('모든 정보를 입력해주세요.');
                return;
            }
        if (!checkDateValidation()) {
            alert("이미 지난 날짜입니다. 다시 선택해주세요.");
            setValue(new Date());
            return;
        }
        addComponent([
        <ChatBotLayout><ChatBotText>세부 내용을 입력해주세요.</ChatBotText></ChatBotLayout>,
        <ChatBotLayout><ReservationForm /></ChatBotLayout>
        ])
    }

  return (
    <Container>
        <CustomCalendar 
            onChange={setValue} 
            value={value}
            formatDay={(locale, date) => moment(date).format('DD')}
            showNeighboringMonth={false}
            />
        <DateContainer>
            <span className='date-title'>날짜</span>
            <span style={{marginLeft:'2rem', fontSize: '1.2rem'}}>{moment(value).format("YYYY년 MM월 DD일")}</span>
        </DateContainer>
        <MeetingRoomForm />
        <NextButton onClick={onClick}>다음</NextButton>
    </Container>
    
  )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`
const CustomCalendar = styled(Calendar)`
    width: 90%;
    // height: 100%;
    margin: 0 auto;
    border: none;
`

const DateContainer = styled.div`
    // margin: 0 auto;
    display: flex;
    margin-top: 2rem;
    margin-left: 2rem;
    font-size: 1.2rem;
    .date-title {
        display: flex;
        font-weight: bold;
        width: 4rem;
        // border: 1px solid black;
    }
    
`

const TimePicker = styled.div`
    display: flex;
    flex-direction: row;
    // margin: 0 auto;
    margin-left: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1rem;
    // font-weight: bold;
    .select-container {
        height: 3rem;
    }
    // .time-title {
    //     font-weight: bold;
    // }

    .time-from {
        width: 8rem;
        height: 0.5rem;
        margin: 0 1rem;
        // background: #D9D9D9;
    }

    // .time-to {
    //     width: 4rem;
    //     margin: 0 1rem;
    // }
`
const NextButton = styled.button`
    width: 10rem;
    margin: 1rem auto;
    height: 3rem;
    background: #FFC3C3;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.3rem;
    cursor: pointer;
`

export default CalendarForm