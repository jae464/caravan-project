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

    const onClickCancel = () => {
        alert("취소")
    }

    const onClickModify = () => {
        alert("수정")
    }

    const addInfo = () => {
        let tmp = getItemInfo('test')
        setItemList([...itemList, <ReservationInfoForm onClickCancel={onClickCancel} onClickModify={onClickModify} conferenceInformationData={tmp}/>])
        console.log(itemList)
    }

    return (
        <>
            <AppLayout>
                {name.map( e =>
                        <StatusItem onClick={addInfo} key={e} date={e} time={"민재 바보"} />
                )}
                {itemList.map( e => {
                     return e
                 })}
            </AppLayout>
        </>
    )
}


const ItemContainer = styled.div `
    dispaly: flex;
    width: 100%
    height: 100%
    border: 1px solid black;
    flex-direction: column;
    border: 1px solid black;
`

export default ReservationStatusPage;