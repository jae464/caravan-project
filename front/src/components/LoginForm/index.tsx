import React from 'react'
import styled from '@emotion/styled';


const LoginForm = () => {
  return (
    <Container>
        <h2>로그인</h2>
        <InputContainer>
            <TextContainer>사번</TextContainer>
            <FormInput />
        </InputContainer>
        <InputContainer>
            <TextContainer>비밀번호</TextContainer>
            <FormInput />
        </InputContainer>
        <LoginButton>로그인</LoginButton>
    </Container>    
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const TextContainer = styled.span`
    font-size: 1.2rem;
    width: 6rem;
    font-weight: bold;
`
const InputContainer = styled.div`
    display: flex;
    width: 100%;
    height: 1.5rem;
    align-items: center;
    margin-bottom: 2rem;
    justify-content: center;
`
const FormInput = styled.input`
    height: 90%;
    width: 16rem;
    border: none;
    border-radius: 4px;
    margin-left: 2rem;
`

const LoginButton = styled.button`
    width: 8rem;
    height: 3rem;
    background: #FFC3C3;
    border: none;
    color: white;
    border-radius: 4px;
    font-size: 1.3rem;
`
export default LoginForm;