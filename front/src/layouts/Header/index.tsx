import React, { useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom"
import { useResetRecoilState } from "recoil";
import reservationPageAtom from "recoil/reservationPage/atom";

const Header = ({name="KT 회의실 예약"}:{name?: string}) => {
    const resetComponents = useResetRecoilState(reservationPageAtom);

    return (
        <>
            <Container>
                <div style={{width: "4rem"}}></div>
                <h2>{name}</h2>
                <div onClick={() => resetComponents()}><Logo to="/"></Logo></div>
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
    // border: 1px solid blue;
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