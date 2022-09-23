import React, { useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom"

const Information = () => {
    return (
        <>
            <Container>
                <ChatbotImage  src="http://localhost:3001/icon/bear.png"/>
                <h3>회의실 예약 서비스입니다.</h3>
                <br />
                <h3>원하는 메뉴를 선택해주세요.</h3>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 16rem;
    // padding: 4rem;
    background: rgb(255, 195, 195, 20%)
    // opacity: 0.2;
`

const ChatbotImage = styled.img`
    background: rgb(232, 232, 232, 90%);
    padding: 0.3rem;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    margin: 3rem;
`



export default Information;
