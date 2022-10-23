import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import AppLayout from 'layouts/AppLayout';
import ChatLayout from 'layouts/ChatLayout';
import LoginForm from 'components/LoginForm';
import useInput from 'hooks/useInput';
const LoginPage = () => {
  return (
    <>
      <AppLayout name="로그인">
        <Container>
          <LoginForm />
          <Link to="/signup" style={{ marginTop: '1rem' }}>
            회원가입
          </Link>
        </Container>
      </AppLayout>
      <ChatLayout />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 4rem auto;
  padding: 2rem;
  background: #efefef;
  // border: 1px solid black;
  align-items: center;
  justify-content: center;
`;
export default LoginPage;
