import React, { useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom"

const Information = () => {
    return (
        <>
            <Container>
                <ChatbotImage  src="http://localhost:3001/icon/bear.png"/>
                <TextContainer>
                    <div className="chatbot-nickname">곰돌이</div>
                    <span>안녕하세요!</span>
                    <br />
                    <span>회의실 예약 서비스입니다.</span>
                    <br />
                    <span>원하는 메뉴를 선택해주세요.</span>
                </TextContainer>
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

const TextContainer = styled.div`
    margin-top: 3rem;
    font-size: 1.3rem;
    color: #8A8A8A;
    .chatbot-nickname {
        display: inline-box;
        font-size: 0.8rem;
        color: black;
        font-weight: bold;
        margin-bottom: 0.6rem;
        // font-weight: bold;
    }
`



export default Information;
