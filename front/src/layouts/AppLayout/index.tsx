import React, { FC } from 'react'
import styled from '@emotion/styled'
import Header from 'layouts/Header'
import ChatLayout from 'layouts/ChatLayout'

const AppLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <MainContainer>
        <Header />
            {children}
        <ChatLayout />
    </MainContainer>
  )
}

const MainContainer = styled.div`
    width: 800px;
    height: 800px;
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // align-items: center;
    margin: auto;
    margin-top: 160px;
    background: white;
    position: relative;
`

export default AppLayout