import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import useForm from 'hooks/useForm';
import {getUserByEmployeeNumber, signUp } from 'api/user';


const SignUpForm = () => {
    const navigate = useNavigate();
    const [values, errors, handleChange, handleSubmit] = useForm({
        initialValues: {
            employeeNumber: '',
            password: '',
            name: '',
        },
        validate: (values: any) => {
            return getUserByEmployeeNumber(values.employeeNumber);
        },
        onSubmit: (values: any) => {
            signUp(values.employeeNumber, values.password, values.name);
        },
        onCancle: () => {
            alert("가입 취소")
        }
    })

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const checkUser = await getUserByEmployeeNumber(values.employeeNumber);
        console.log(checkUser);
        if (checkUser) {
            alert("이미 존재하는 사번입니다.");
            return;
        }
        signUp(values.employeeNumber, values.password, values.name);
        alert("가입이 완료되었습니다.");
        navigate('/login');     
    }

  return (
    <Container>
        <h2>회원가입</h2>
        <InputContainer>
            <TextContainer>사번</TextContainer>
            <FormInput 
                type="text"
                name='employeeNumber'
                id='employeeNumber'
                placeholder='사번을 입력하세요.'
                value={values.employeeNumber}
                onChange={handleChange}
            />
        </InputContainer>
        <InputContainer>
            <TextContainer>비밀번호</TextContainer>
            <FormInput 
                type='password'
                name='password'
                id='password'
                placeholder='비밀번호를 입력하세요.'
                value={values.password}
                onChange={handleChange}
            />
        </InputContainer>
        <InputContainer>
            <TextContainer>이름</TextContainer>
            <FormInput 
                type='text'
                name='name'
                id='name'
                placeholder='이름을 입력하세요.'
                value={values.name}
                onChange={handleChange}
            />
        </InputContainer>
        <LoginButton onClick={onSubmit}>회원가입</LoginButton>
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
    cursor: pointer;
    font-size: 1.3rem;
`
export default SignUpForm;