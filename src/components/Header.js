import React from 'react';
import  styled  from 'styled-components';


const Headeing = styled.header`
    padding: 30px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;
const Tab = styled.div`
    display: flex;
    & > p{
        padding: 10px;
    }

`;
const GetInTouchBtn = styled.button`
    border: 1px solid white;
    outline: none;
    background: #000;
    color: white;
    padding: 15px 20px;
`;

const Header = () => {
    return (
        <Headeing>
            <h1>Scrolling Image</h1>
            <Tab>
                <p>Home</p>
                <p>About</p>
                <p>Work</p>
                <p>Contact</p>
            </Tab>
            <GetInTouchBtn>
                Get in touch
            </GetInTouchBtn>
        </Headeing>
    );
};

export default Header;