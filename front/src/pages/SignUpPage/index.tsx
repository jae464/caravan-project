import AppLayout from 'layouts/AppLayout';
import React from 'react';
import styled from '@emotion/styled';
import ChatLayout from 'layouts/ChatLayout';
import LoginForm from 'components/LoginForm';
import SignUpForm from 'components/SignUpForm';
const SignUpPage = () => {
  return (
    <>
      <AppLayout name="로그인">
        <Container>
          <SignUpForm />
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
export default SignUpPage;
