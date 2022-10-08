import React from 'react'
import styled from '@emotion/styled';
import useInput from 'hooks/useInput';
import { doLogin } from 'api/user';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userAtom } from 'recoil/user/atom';


const LoginForm = () => {
    const [employeeNumber, onChangeEmployeeNumber] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [userState, setUserState] = useRecoilState(userAtom);
    const resetUserState = useResetRecoilState(userAtom);

    const onClick = async () => {
        const user = await doLogin(employeeNumber, password);
        console.log(userState);
        console.log(`LoginForm ${user}`);
        console.log(user);
        if (!user) {
            alert('사번 혹은 비밀번호를 확인해주세요.')
            return;
        }
        alert('로그인 완료!');
        setUserState({id: user.id, employeeNumber: user.employeeNumber, name: user.name});
    }

    const logOut = () => {
        resetUserState();
        alert('로그아웃 완료!')
    }

  return (
    <Container>
        {userState.id ? 
            (
            <>
                <h2>{userState.name} 님 반갑습니다.</h2>
                <LoginButton onClick={logOut}>로그아웃</LoginButton>   
            </>
            )
            :
            (<>
                <h2>로그인</h2>
                <InputContainer>
                    <TextContainer>사번</TextContainer>
                    <FormInput
                        value={employeeNumber}
                        onChange={onChangeEmployeeNumber}
                        placeholder='사번을 입력하세요.'
                    />
                </InputContainer>
                <InputContainer>
                    <TextContainer>비밀번호</TextContainer>
                    <FormInput 
                        type="password"
                        placeholder='비밀번호를 입력하세요.'
                        value={password}
                        onChange={onChangePassword}
                    />
                </InputContainer>
                <LoginButton onClick={onClick}>로그인</LoginButton>
            </>
            )

        }
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
    cursor: pointer;
`
export default LoginForm;