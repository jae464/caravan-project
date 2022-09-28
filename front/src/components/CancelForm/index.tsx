import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const CancelForm = (props: Props) => {
  return (
    <Container>
        <span>해당 회의실 예약을 취소하시겠습니까?</span>
        <ButtonContainer>
            <CancelButton>YES</CancelButton>
            <CancelButton>NO</CancelButton>
        </ButtonContainer>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    margin: auto;
    margin-top: 160px;
    // background: #0E0E0;
    width: 40%;
    border: 1px solid black;
    justify-content: space-around;
    bottom: 0px;
`
const ButtonContainer = styled.div`
    display: flex;  
    flex-direction: colums;
    justify-content: space-around;
`

const CancelButton = styled.button`
    display: flex;
    text-decoration: none;
    font-size: 1rem;
    outline: none;
    height: 3rem;
    width: 8rem;
    color: white;
 
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
    // margin-bottom: 4rem;
    background: #A5B5EC;

    margin-bottom: 10px;
    border-radius: 5px;
`
export default CancelForm