import React from 'react';
import styled from '@emotion/styled';
import Logo from '../assets/logo.svg?react';


const HeaderWrapper = styled.div`
    // border-bottom: 1px solid black;
    height: 135px;
    display: flex;
    align-items: center;
    padding-left: 29px;
    box-shadow: 0 2.5px 4px 1px rgba(0, 0, 0, 0.25);
`;
const Header = () => {
    return (
        <HeaderWrapper>
            <Logo width={149} height={76}/>
        </HeaderWrapper>
    )
}
export default Header;