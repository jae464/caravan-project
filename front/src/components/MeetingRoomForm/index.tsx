import React from 'react'
import { floor_list, time_range } from 'utils/consts';
import styled from '@emotion/styled';

const MeetingRoomForm = () => {


  return (
        <>
    <Container>
        <FloorContainer>
          <span className='title'>층 선택</span>
          <FloorSelector>
            {floor_list.map(floor => {
              return (<option className='floor'>{floor}F</option>)
            })}
          </FloorSelector>
        </FloorContainer>
        <TimePicker>
          <span className='title'>시간</span>
          <div className='select-container'>
                <select className='time-from'>
                    {time_range.map(time => {
                        return <option>{time.label}</option>
                    })}
                </select>

            </div>
            <span>~</span>
            <div className='select-container'>
                <select className='time-to'>
                    {time_range.map(time => {
                        return <option>{time.label}</option>
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