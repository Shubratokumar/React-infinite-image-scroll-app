import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Images = ({data}) => {
    return (
        <div>
            <Img src={data} alt='random-img'/>
        </div>
    );
};

export default Images;