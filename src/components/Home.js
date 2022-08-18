import React, { useEffect, useState } from 'react';
import Header from './Header';
import Loader from './Loader';
import Images from './Images';

import axios from 'axios';



const Home = () => {
    const [ images, setImages ] = useState([]);

    useEffect(() => {
        const rootApi = `https://api.unsplash.com`;
        const accessKey = process.env.REACT_APP_ACCESSKEY;

        axios.get(`${rootApi}/photos/random?client_id=${accessKey}&count=20`)
        .then(res => setImages([ ...images, ...res.data]))
    }, [images])
    
    return (
        <section>
            <Header/>
            <Loader/>
            {
                images.map(image => (
                    <Images data={image.urls.thumb} key={image.id} />
                ))
            }
        </section>
    );
};

export default Home;