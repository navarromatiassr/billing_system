import React from "react";
import Hi from './Components/Hi';
import Carousel from './Components/Carousel/carousel';

class Welcome extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container">
                <Hi/>
                <Carousel/>
            </div>
        )
    }
}
export default Welcome;