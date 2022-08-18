import React, { useEffect, useState } from 'react';
import Header from './Header';
import Loader from './Loader';
import Images from './Images';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: sans-serif;
    }
`;

const ImageWrapper = styled.section`
    max-width: 70rem;
    margin: 4rem auto;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
`

const Home = () => {
    const [ images, setImages ] = useState([]);

    useEffect(() => {
        fetchImages()
    }, []);


    const fetchImages = () =>{
        const rootApi = `https://api.unsplash.com`;
        const accessKey = process.env.REACT_APP_ACCESSKEY;

        axios.get(`${rootApi}/photos/random?client_id=${accessKey}&count=20`)
        .then(res => setImages([ ...images, ...res.data]))
    }
    
    return (
        <section>
            <Header/>
            <GlobalStyle/>
            <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={<Loader/>}
            
            >
                <ImageWrapper>
                    {
                        images.map(image => (
                            <Images data={image.urls.thumb} key={image.id} />
                        ))
                    }
                </ImageWrapper>
            </InfiniteScroll>            
        </section>
    );
};

export default Home;