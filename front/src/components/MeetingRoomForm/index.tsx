import React, { useEffect, useState } from 'react'
import { floor_list, time_range } from 'utils/consts';
import styled from '@emotion/styled';
import { reservationAtom } from 'recoil/reservation/atom';
import { useRecoilState } from 'recoil';
import { getAllRoom } from 'api/meetingRoom';
import { Room } from 'types/room';

const MeetingRoomForm = () => {

  const [reservation, setReservation] = useRecoilState(reservationAtom);
  const [startTimeArr, setStartTimeArr] = useState(time_range);
  const [endTimeArr, setEndTimeArr] = useState(time_range);
  const [floor, setFloor] = useState('15'); // default 15층
  const [roomList, setRoomList] = useState<Room[]>([]);

  const onChangeFloor = (e: any) => {
    setFloor(e.target.value);
  }

  const onChangeStartTime = (e: any) => {
    console.log(e.target.value);
    setReservation(prev => ({
      ...prev,
      startTime: Number(e.target.value)
    }))

    // 끝 시간을 현재 시작 시간 기준으로 더 나중 값만 가져옴
    const needEndTimeArr = time_range.filter(v => {
      return v.value >= e.target.value;
    });

    setEndTimeArr(needEndTimeArr);
  }

  const onChangeEndTime = (e: any) => {
    console.log('onChangeEndTime');
    setReservation(prev => ({
      ...prev,
      endTime: Number(e.target.value)
    }))
  }

  const onChangeRoom = (e: any) => {
    console.log(e.target.value);
    setReservation(prev => ({
      ...prev,
      meetingRoomId: Number(e.target.value)
    }))
  }

  const fetchRoomList = async () => {
    const result = await getAllRoom(floor);
    setRoomList(result);
    console.log(result);
  }

  useEffect(() => {
    setReservation(prev => ({
      ...prev,
      endTime: Number(endTimeArr[0].value)
    }));  
  },[endTimeArr]);

  useEffect(() => {
    console.log(`floor 가 ${floor}층으로 변경되었습니다.`);

    // TODO 해당 Floor 의 회의실을 가져오는 API 호출
    fetchRoomList();
  }, [floor])

  return (
        <>
    <Container>
        <FloorContainer>
          <span className='title'>층 선택</span>
          <FloorSelector defaultValue={floor} onChange={onChangeFloor}>
            {floor_list.map(item => {
              return (<option className='floor' value={item}>{item}F</option>)
            })}
          </FloorSelector>
        </FloorContainer>
        <TimePicker>
          <span className='title'>시간</span>
          <div className='select-container'>
                <select 
                  className='time-from'
                  onChange={onChangeStartTime}
                >
                    {startTimeArr.map(time => {
                        return <option value={time.value}>{time.label}</option>
                    })}
                </select>

            </div>
            <span>~</span>
            <div className='select-container'>
                <select
                  className='time-to'
                  onChange={onChangeEndTime}
                  defaultValue={endTimeArr[0].value}
                >
                    {endTimeArr.map(time => {
                        return <option value={time.value}>{time.label}</option>
                    })}
                </select>
            </div>
        </TimePicker>
        <MeetingRoomContainer>
          <div className='meetingroom-status'>
            <div className='reserve available'>
              <div className='circle green'></div>
              <span>사용가능</span>
            </div>
            <div className='reserve unavailable'>
              <div className='circle red'></div>
              <span>예약불가</span>
            </div>
          </div>
          <MeetingRoomImage>
            {roomList && roomList.map( (room: Room) => {
                return (
       
                  <div>
                    <label>{room.name}</label>
                    <input name='room' type='radio' value={room.id} onChange={onChangeRoom}/>
                  </div> 
                                   
                )
              }
            )}
          </MeetingRoomImage>
        </MeetingRoomContainer>
      </Container>  
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  .title {
    width: 4rem;
    font-size: 1.3rem;
    font-weight: bold;
    margin-left: 2rem;
  }
`

const FloorContainer = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  align-items: center;
`

const FloorSelector = styled.select`
  width: 60%;
  height: 1.6rem;
  background: #D9D9D9;
  margin-left: 2rem;
  border: none;
`

const TimePicker = styled.div`
  margin-top: 1rem;
  display: flex;
  .select-container {
    height: 4rem;
  }
  .time-title {
      font-weight: bold;
  }

  .time-from {
      width: 4rem;
      margin: 0 2rem;
      // background: #D9D9D9;
  }

  .time-to {
      width: 4rem;
      margin: 0 1rem;
  }
`

const MeetingRoomContainer = styled.div`
  .meetingroom-status {
    display: flex;
    margin-left: 2rem;
    // margin-top: 1.5rem;
  }
  .unavailable {
    margin-left: 1.3rem;
  }
  .reserve {
    display: flex;
  }
  .circle {
    width: 16px;
    height: 16px;
    margin-right: 0.6rem;
    border: 1px solid black;
    border-radius: 50%;
    border: none;
  }
  .green {
    background: green;
  }
  .red {
    background: red;
  }
`

const MeetingRoomImage = styled.div`
  height: 16rem;
  margin-top: 1.5rem;
  width: 100%;
  // border: 1px solid black;
  background: white;
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
export default MeetingRoomForm;