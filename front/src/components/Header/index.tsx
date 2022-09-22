import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
const Header = () => {
    return (
        <>
            <Container>
                <div>1</div>
                <div>2</div>
                <div>3</div>
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
    // border: 1px solid black;
    background: pink;
`

export default Header;