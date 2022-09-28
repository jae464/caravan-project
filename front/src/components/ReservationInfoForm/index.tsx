import React from 'react'
import styled from 'styled-components'
import {ConferenceInformationData} from 'types/ConferenceInformationData'

const ReservationInfoForm = ({roomName, conferenceName, date, time, booker, participant, tel}: ConferenceInformationData): JSX.Element => {
  return (
    <div>
        <h2>예약 정보</h2>
        <table>
            <tr>
                <td>
                    <h3>회의실명</h3>{roomName}
                </td>
            </tr>
            <tr>
                <td>
                    <h3>회의 제목</h3>{conferenceName}
                </td>
            </tr>
            <tr>
                <td>
                    <h3>회의 일자</h3>{date}
                </td>
                <td>
                    <h3>회의 시간</h3>{time}
                </td>
            </tr>
            <tr>
                <td>
                    <h3>예약자</h3>{booker}
                </td>
                <td>
                    <h3>참석자</h3>{participant}
                </td>
            </tr>
            <tr>
                <h3>연락처</h3>{tel}
            </tr>
       </table>
    </div>
  )
}

const Container = styled.div`
    display: flex;
`



export default ReservationInfoForm