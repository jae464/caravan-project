import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'
import {ConferenceInformationData} from 'types/ConferenceInformationData'

type Props = {
    conferenceInformationData: ConferenceInformationData,
    onClickCancel: MouseEventHandler,
    onClickModify: MouseEventHandler
}

const ReservationInfoForm = ({conferenceInformationData, onClickCancel, onClickModify}: Props): JSX.Element => {
    // const onClickCancel = () => {

    // }

    // const onClickModify = () => {

    // }
    return (
        <MainContainer>
            <Container>
                <table>
                    <thead>
                        <h2>예약 정보</h2>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <span>회의실명</span>{conferenceInformationData.roomName}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>회의 제목</span>{conferenceInformationData.conferenceName}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>회의 일자</span>{conferenceInformationData.date}
                        </td>
                        <td>
                            <span>회의 시간</span>{conferenceInformationData.time}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>예약자</span>{conferenceInformationData.booker}
                        </td>
                        <td>
                            <span>참석자</span>{conferenceInformationData.participant}
                        </td>
                    </tr>
                    <tr>
                        <span>연락처</span>{conferenceInformationData.tel}
                    </tr>
                    </tbody>
                </table>
            </Container>
            <ButtonContainer>
                <ReservationStatusButton onClick={onClickModify}>수정하기</ReservationStatusButton>
                <ReservationStatusButton onClick={onClickCancel}>예약취소</ReservationStatusButton>
            </ButtonContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    margin: auto;
    // background: #0E0E0;
    width: 100%;
    height: 100%;
    // border: 1px solid black;
    // justify-content: space-;
`

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    margin: auto;
    // margin-top: 160px;
    // background: #0E0E0;
    width: 40%;
    // border: 1px solid black;
    justify-content: space-around;
    // bottom: 0px;
`
const ButtonContainer = styled.div`
    display: flex;  
    width: 60%;
    margin-top: 2rem;
    flex-direction: row;
    justify-content: space-around;
`

const ReservationStatusButton = styled.button`
    display: flex;
    text-decoration: none;
    font-size: 1rem;
    outline: none;
    height: 3rem;
    width: 8rem;
    color: white;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
    // margin-bottom: 4rem;
    background: #A5B5EC;

    margin-bottom: 10px;
    border-radius: 5px;
`



export default ReservationInfoForm