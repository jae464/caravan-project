import React, { useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'recoil/user/atom';

const Information = () => {
  const userState = useRecoilValue(userAtom);

  return (
    <>
      <Container>
        <ChatbotImage src="http://localhost:3001/icon/bear.png" />
        <TextContainer>
          <div className="chatbot-nickname">곰돌이</div>
          {userState.id ? (
            <>
              <span>안녕하세요! {userState.name} 님</span>
              <span>회의실 예약 서비스입니다.</span>
              <span>원하는 메뉴를 선택해주세요.</span>
            </>
          ) : (
            <>
              <span>안녕하세요!</span>
              <span>회의실 예약 서비스입니다.</span>
              <span>먼저 로그인을 해주세요.</span>
            </>
          )}
        </TextContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 16rem;
  // padding: 4rem;
  background: rgb(255, 195, 195, 20%);
  // opacity: 0.2;
  // span {
  //     display: block;
  // }
`;

const ChatbotImage = styled.img`
  background: rgb(232, 232, 232, 90%);
  padding: 0.3rem;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 3rem;
`;

const TextContainer = styled.div`
  margin-top: 3rem;
  font-size: 1.3rem;
  color: #8a8a8a;
  .chatbot-nickname {
    display: inline-box;
    font-size: 0.8rem;
    color: black;
    font-weight: bold;
    margin-bottom: 0.6rem;
    // font-weight: bold;
  }
  span {
    display: block;
    margin-bottom: 1rem;
  }
`;

export default Information;
