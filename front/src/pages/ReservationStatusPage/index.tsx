import React, {useState, useCallback, MouseEventHandler} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StatusItem from 'components/StatusItem'
import AppLayout from 'layouts/AppLayout';
import ReservationInfoForm from 'components/ReservationInfoForm'
import {ConferenceInformationData} from 'types/ConferenceInformationData'
import ReservationForm from 'components/ReservationForm';
import e from 'express';

const ReservationStatusPage = () => {
    const name: string[] = ['1','2','3','4','5'];
    const [arr, setArr] = useState([]);
    const [itemList, setItemList] = useState<React.ReactNode[]>([]);
    const [itemInfoList, setItemInfoList] = useState<ConferenceInformationData[]>([]);

    const getItemInfo = (key: string):ConferenceInformationData => {
        // db에 저장된 data 가져와야함
        let tmp: ConferenceInformationData;
        tmp = { roomName:'1', conferenceName:'2', date:'3', time:'4', participant:'5', booker:'6', tel:'7'}
        return tmp
    }

    const addInfo = () => {
        let tmp = getItemInfo('test')
        setItemList([...itemList, <ReservationInfoForm roomName={tmp.roomName} conferenceName={tmp.conferenceName}  date={tmp.date} time={tmp.time} participant={tmp.participant} booker={tmp.booker} tel={tmp.tel} />])
        console.log(itemList)
    }

    return (
        <>
            <AppLayout>
                {name.map( e =>
                        <StatusItem onClick={addInfo} key={e} date={e} time={"민재 바보"} ></StatusItem>
                )}
                {itemList.map( e => {
                     return e
                 })}
                {/* <ButtonContainer>
                    <ReservationStatusButton>ttt</ReservationStatusButton>
                    <ReservationStatusButton to="/modify">수정하기</ReservationStatusButton>
                    <ReservationStatusButton to="/cancel">예약취소</ReservationStatusButton>
                </ButtonContainer> */}
            </AppLayout>
        </>
    
    )
}

const MainContainer = styled.div`
    width: 800px;
    height: 800px;
    border: 1px solid black;
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-top: 160px;
    // background: #E0E0E0;
    
`

const ButtonContainer = styled.div `
    display: flex;
    width: 100%;
    position: absolute;
    // border: 1px solid black;
    justify-content: space-around;
    bottom: 0px;
    flex-direction: row;

`

const ReservationStatusButton = styled.button`
    display: flex;
    text-decoration: none;
    font-size: 2rem;
    outline: none;
    height: 3rem;
    width: 8rem;
    color: white;

    text-align: center; 
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
    // margin-bottom: 4rem;
    background: #A5B5EC;
`



const ItemContainer = styled.div `
    dispaly: flex;
    width: 100%
    height: 100%
    border: 1px solid black;
    flex-direction: column;
`

export default ReservationStatusPage;