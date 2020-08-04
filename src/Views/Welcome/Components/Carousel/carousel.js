import React, { Component } from "react";
import './carousel.css'

class Carousel extends Component{
    render(){
        return(
            <div>
            <div className="blue-bg"></div>
        <div className="white-bg shadow"></div>
        <div className="content">
            <h1>BILLING SYSTEM</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna ex, elementum id convallis eu,
                elementum id justo. Maecenas dictum sagittis leo, ut ultrices risus mollis vitae. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Phasellus
                eu lectus felis. Vivamus eget velit erat. Vivamus condimentum augue sed lacus viverra imperdiet. Etiam
                quis lectus non libero hendrerit porta. In sit amet molestie lacus. Praesent ultricies, lectus eget
                porta porttitor, sem sapien facilisis arcu,
                eu tincidunt nulla odio ac ipsu.</p>
        </div>
            </div>
        )
    }
}

export default Carousel;