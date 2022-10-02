import React, { useCallback, useState } from 'react'
import Calendar from 'react-calendar'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-calendar/dist/Calendar.css';
import styled from '@emotion/styled';
import moment from 'moment';
import useComponentHooks from 'hooks/useComponentAdd';
import { time_range } from 'utils/consts';
import ChatBotLayout from 'layouts/ChatBotLayout';
import ReservationForm from 'components/ReservationForm';
import MeetingRoomForm from 'components/MeetingRoomForm';
import ChatBotText from 'design/ChatBotText';
const CalendarForm = () => {
    const [value, setValue] = useState(new Date());
    const {addComponent} = useComponentHooks([]);

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
        return true;
    }

    const onClick = () => {
        console.log(value);
        if (!checkDateValidation()) {
            alert("이미 지난 날짜입니다. 다시 선택해주세요.");
            setValue(new Date());
            return;
        }
        addComponent([
        <ChatBotLayout><ChatBotText>원하는 층과 회의실을 선택해주세요.</ChatBotText></ChatBotLayout>,
        <ChatBotLayout><MeetingRoomForm /></ChatBotLayout>
        ])
    }

  return (
    <Container>
        <CustomCalendar onChange={setValue} value={value}/>
        <DateContainer><span className='date-title'>날짜 : </span>{moment(value).format("YYYY년 MM월 DD일")}</DateContainer>
        <TimePicker>
            <span className='time-title'>시간 : </span>
            <div className='select-container'>
                <select className='time-from' size={3} >
                    {time_range.map(time => {
                        return <option>{time}</option>
                    })}
                </select>
            </div>
            <span>~</span>
            <div className='select-container'>
                <select className='time-to' size={3} >
                    {time_range.map(time => {
                        return <option>{time}</option>
                    })}
                </select>
            </div>
        </TimePicker>
        <NextButton onClick={onClick}>확인</NextButton>
    </Container>
    
  )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`
const CustomCalendar = styled(Calendar)`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    border: none;
`

const DateContainer = styled.div`
    margin: 0 auto;
    margin-top: 2rem;
    font-size: 1.4rem;
    .date-title {
        font-weight: bold;
    }
    
`

const TimePicker = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    font-size: 1.4rem;
    margin-top: 1rem;
    // font-weight: bold;
    .select-container {
        height: 4rem;
    }
    .time-title {
        font-weight: bold;
    }

    .time-from {
        width: 4rem;
        margin: 0 1rem;
        // background: #D9D9D9;
    }

    .time-to {
        width: 4rem;
        margin: 0 1rem;
    }
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