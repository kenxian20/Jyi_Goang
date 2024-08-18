import React from 'react';
import styled from '@emotion/styled';
import Logo from '../assets/logo.svg?react'; //?react telling vite to recognize it react components


const HeaderWrapper = styled.div`
    height: 135px;
    display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    align-items: center;
    padding-left: 29px;
    box-shadow: 0 2.5px 4px 1px rgba(0, 0, 0, 0.25);
    // border: 1px solid black;
`;
const LogoGroup = styled.div`
    display: flex;
    align-items: center;
`;
const LogoName = styled.div`
    margin-left: 1.2rem;
    margin-bottom:0.9rem;
    cursor: pointer;
`;
const ChiName = styled.p`
    font-family: "Noto Sans TC", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
`;
const EngName = styled.p`
    font-family: "Crimson Text", serif;
    font-size: 1rem;
    font-weight: 700;
    font-style: normal;
`;
const List = styled.ul`
    display: flex;
    list-style-type: none;
    li {
        margin-right: 50px;
        font-size: 1.3125rem;
        font-weight: 600;
        position: relative;
        
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background: black;
            bottom: -2px;
            left: 0;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease-out;
        }

        &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
    
`;
const Header = () => {
    return (
        <HeaderWrapper>
            <LogoGroup>
                <Logo width={149} height={76} style={{cursor: 'pointer'}}/>
                <LogoName>
                    <ChiName>吉廣實業股份有限公司</ChiName>
                    <EngName>JYI GOANG ENTERPRISE CO. LTD</EngName>
                </LogoName>
            </LogoGroup>
            <nav>
                <List>
                    <li>關於我們</li>
                    <li>產品介紹</li>
                    <li>聯絡我們</li>
                </List>
            </nav>
        </HeaderWrapper>
    )
}
export default Header;