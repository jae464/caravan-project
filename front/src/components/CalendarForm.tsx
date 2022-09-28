import React, { useState } from 'react'
import Calendar from 'react-calendar'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-calendar/dist/Calendar.css';
import styled from '@emotion/styled';
import moment from 'moment';

const CalendarForm = () => {
    const [value, onChange] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const onClick = () => {
        console.log(value);
    }
  return (
    <Container>
        <CustomCalendar onChange={onChange} value={value}/>
        <DateContainer><span className='date-title'>날짜 : </span>{moment(value).format("YYYY년 MM월 DD일")}</DateContainer>
        <TimePicker>
            <span className='time-title'>시간 : </span>
            <select className='time-from'>
                <option>07:00</option>
                <option>07:30</option>
            </select>
            <span>~</span>
            <select className='time-to'></select>

        </TimePicker>
        {/* <button onClick={onClick}>확인</button> */}
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
    margin-top: 0.4rem;
    // font-weight: bold;
    .time-title {
        font-weight: bold;
    }

    .time-from {
        width: 4rem;
        margin: 0 1rem;
    }

    .time-to {
        width: 4rem;
        margin: 0 1rem;
    }
`


export default CalendarForm