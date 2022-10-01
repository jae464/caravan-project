import React, { FC, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Header from 'layouts/Header'
import ChatLayout from 'layouts/ChatLayout'
import { useResetRecoilState } from 'recoil'
import reservationPageAtom from 'recoil/reservationPage/atom'

const AppLayout = ({ children, name }: {children: React.ReactNode, name?: string}) => {
  
  return (
    <>
      <MainContainer>
        <Header name={name}/>
          <Content>              
              {children}
          </Content>     
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
    width: 800px;
    // width: 100%;
    height: 90vh;
    min-height: 600px;
    max-height: 800px;
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // align-items: center;
    margin: 4rem auto;
    background: white;
    position: relative;
    // overflow-y: auto;
`

const Content = styled.div`
    // border: 1px solid black;
    overflow-y: auto;
    min-height: 700px;
`

export default AppLayout