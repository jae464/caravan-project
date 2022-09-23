import React, { useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <Container>
                <div style={{width: "4rem"}}></div>
                <h2>KT 회의실 예약</h2>
                <Logo to="/"></Logo>
            </Container>
        </>
    )
}

const Container = styled.header`
    display: flex;
    flex-direction: row;
    // max-width: 800px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    color: white;
    // border: 1px solid black;
    background: #FFC3C3;
`
const Logo = styled(Link)`
    display: flex;
    flex-direction: row;
    width: 30px;
    height: 30px;
    text-align: center;
    margin-right: 0.5rem;
    // border: 1px solid black;
    background-size: cover;
    background-image: url('http://localhost:3001/icon/free-icon-home-button-61972.png')
`

export default Header;