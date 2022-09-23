import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ReservationStatusPage = () => {

    return (
        <>
            <MainContainer>
                <ItemContainer>
                    <Item />
                </ItemContainer>
                <ButtonContainer>
                    <ReservationStatusButton to="/modify">수정하기</ReservationStatusButton>
                    <ReservationStatusButton to="/cancel">예약취소</ReservationStatusButton>
                </ButtonContainer>
            </MainContainer>
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
    // margin: auto;
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

const ReservationStatusButton = styled(Link)`
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

const Item = styled.div `
    display: flex;
    width: 100%;
`


export default ReservationStatusPage;