import React from 'react';

import { Carousel } from 'antd';
import image1 from '../../img/img1.png';
import image2 from '../../img/img2.png';
import image3 from '../../img/img3.png';

const Design = (props) => {
    return <Carousel dotPosition="top">
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
    </Carousel>
}

export default Design;
