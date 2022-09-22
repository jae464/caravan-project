import React, { useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <Container>
                <div>1</div>
                <h2>KT 회의실 예약</h2>
                <Logo to="/"></Logo>
            </Container>
        </>
    )
}

const Container = styled.header`
    display: flex;
    // max-width: 800px;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    color: white;
    // border: 1px solid black;
    background: #FFC3C3;
`
const Logo = styled(Link)`
    display: block;
    width: 3rem;
    height: 100%;
    background-image: url('/icon/home-button.png');
    background: black;
    font-size: 2rem;
`

export default Header;