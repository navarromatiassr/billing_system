import React from "react";
import Carousel from './Components/Carousel/carousel';
import './welcome.css'

const IMAGE_URLS = {
    background : 'src\\style\\background_2.jpg'
};

const setBackground = (image) => {
    document.body.style.background = "url('"+IMAGE_URLS[image]+"')";
};

    setBackground('background');


class Welcome extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="welcome">
                <Carousel/>
            </div>
        )
    }
}export default Welcome;