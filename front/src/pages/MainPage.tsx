import React, {useState, useCallback} from 'react';
import axios, {AxiosRequestConfig} from 'axios';

const MainPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const axiosConfig: AxiosRequestConfig = {
        baseURL: 'http://localhost:3000',
        withCredentials: true
    }
    const client = axios.create(axiosConfig);
    const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const data = {
            id: email,
            password: password
        }
        const result = await client.post('/users', data);
        console.log(result);
    }

    return (
        <>
            <input 
                placeholder='아이디를 입력하세요'
                value={email}
                onChange={onChangeEmail}
            />
            <br />
            <input 
                placeholder='비밀번호를 입력하세요'
                onChange={onChangePassword}
                value={password}
            />
            <br />
            <button onClick={onClick}>회원가입</button>
        </>
        

    )
}

export default MainPage;