import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import ChatBotLayout from 'layouts/ChatBotLayout';
import MeetingRoomForm from 'components/MeetingRoomForm';
import ChatBotText from 'design/ChatBotText';
import ReservationForm from 'components/ReservationForm';

import 'react-calendar/dist/Calendar.css';
import styled from '@emotion/styled';
import moment from 'moment';
import useComponentHooks from 'hooks/useComponentAdd';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { reservationAtom } from 'recoil/reservation/atom';

const CalendarForm = () => {
  const [value, setValue] = useState(new Date());
  const { addComponent } = useComponentHooks([]);
  const [reservation, setReservation] = useRecoilState(reservationAtom);
  const resetReservation = useResetRecoilState(reservationAtom);

  // 이미 지난 날짜인지 확인
  const checkDateValidation = () => {
    const today = new Date();
    console.log('입력받은 날짜 : ', value, '오늘 날짜 : ', today);
    if (!reservation.meetingDate) return;

    if (
      reservation.meetingDate.getFullYear() < today.getFullYear() ||
      (reservation.meetingDate.getFullYear() === today.getFullYear() &&
        value.getMonth() < today.getMonth()) ||
      (reservation.meetingDate.getFullYear() === today.getFullYear() &&
        value.getMonth() === today.getMonth() &&
        reservation.meetingDate.getDate() < today.getDate())
    ) {
      console.log('이미 지난 날짜입니다.');
      return false;
    }
    setReservation(prev => ({
      ...prev,
      meetingDate: reservation.meetingDate,
    }));
    return true;
  };

  const onClick = () => {
    console.log(value);
    console.log(reservation);

    // 이 컴포넌트에서는 meetingDate가 설정되
    if (
      !reservation.meetingRoomId ||
      !reservation.meetingDate ||
      !reservation.startTime ||
      !reservation.endTime
    ) {
      console.log(reservation);
      alert('모든 정보를 입력해주세요.');
      return;
    }
    if (!checkDateValidation()) {
      alert('이미 지난 날짜입니다. 다시 선택해주세요.');
      setValue(new Date());
      return;
    }

    addComponent([
      <ChatBotLayout>
        <ChatBotText>세부 내용을 입력해주세요.</ChatBotText>
      </ChatBotLayout>,
      <ChatBotLayout>
        <ReservationForm />
      </ChatBotLayout>,
    ]);
  };

  const onChangeDate = (value: Date) => {
    console.log('onChangeDate');
    console.log(value);
    const date = new Date(moment(value).format('YYYY-MM-DD'));
    console.log(date);
    setReservation(prev => ({
      ...prev,
      meetingDate: date,
    }));
  };

  useEffect(() => {
    console.log(`current date ${moment().format('YYYY-MM-DD HHMM')}`);
    setReservation(prev => ({
      ...prev,
      meetingDate: new Date(moment(new Date()).format('YYYY-MM-DD')),
    }));
  }, []);

  return (
    <Container>
      <CustomCalendar
        onChange={onChangeDate}
        value={reservation.meetingDate}
        formatDay={(locale, date) => moment(date).format('DD')}
        showNeighboringMonth={false}
        calendarType="US"
      />
      <DateContainer>
        <span className="date-title">날짜</span>
        <span style={{ marginLeft: '2rem', fontSize: '1.2rem' }}>
          {moment(reservation.meetingDate).format('YYYY년 MM월 DD일')}
        </span>
      </DateContainer>
      <MeetingRoomForm date={reservation.meetingDate} />
      <NextButton onClick={onClick} clickable={!reservation.done}>
        다음
      </NextButton>
      <button
        onClick={() => {
          console.log(reservation);
        }}
      >
        확인용 버튼
      </button>
      <button onClick={resetReservation}>리코일 초기화</button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const CustomCalendar = styled(Calendar)`
  width: 90%;
  // height: 100%;
  margin: 0 auto;
  border: none;
`;

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
`;

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
`;
const NextButton = styled.button<{ clickable: boolean }>`
    width: 10rem;
    margin: 1rem auto;
    height: 3rem;
    background: #FFC3C3;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.3rem;
    cursor: pointer;
    pointer-events: ${props => (props.clickable ? 'auto' : 'none')}

    &:hover{  
        background-color : #fd8f9e;
    }
`;

export default CalendarForm;
