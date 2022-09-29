import React, {useState, useCallback} from 'react';
import axios, {AxiosRequestConfig} from 'axios';
import styled from '@emotion/styled';
import Header from 'layouts/Header';
import Information from 'components/Information'
import { Link } from 'react-router-dom';
import ChatLayout from 'layouts/ChatLayout';
import AppLayout from 'layouts/AppLayout';
import UserChatLayout from "layouts/UserChatLayout";
import { useRecoilState } from 'recoil';
import  {testAtom} from "recoil/test";

const MainPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [test, setTest] = useRecoilState(testAtom);

    const [arr, setArr] = useState<React.ReactNode[]>([]);
  
    const getChat = (text: string) => {
        console.log(text);
        if(text == "") return;
        // setChat([...chat, text]);
        setArr([...arr, <UserChatLayout>{text}</UserChatLayout>])
        setTest({test: 2});
    }
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
            <AppLayout>
                <Information />
                <ItemList>
                    <Item to="/reservation">예약하기</Item>
                    <Item to="/reservationStatus">예약현황 및 취소</Item>
                    <Item to="/status">회의실 현황</Item>
                </ItemList>
            </AppLayout>
            <ChatLayout getText={getChat}/>
        </>
        

    )
}

const ItemList = styled.div`
    display: flex;
    // margin-top: 12rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -2.5rem;
    z-index: 1;
    li {
        font-size: 20px;
        style: none;
    }
`

const Item = styled(Link)`
    display: flex;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    outline: none;
    height: 4rem;
    width: 25rem;
    color: white;
    text-align: center;
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
    border-radius: 1.2rem;
    margin-bottom: 4rem;
    background: #EFEFEF;
    color: black;
    font-size: 1.4rem;
`
export default MainPage;