import React from "react";
import Hi from './Components/Hi';
import Carousel from './Components/Carousel/carousel';
import './welcome.css'

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
}
export default Welcome;