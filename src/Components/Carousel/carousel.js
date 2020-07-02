import React, { Component } from "react";

class Carousel extends Component{
    render(){
        return(
            <div className="carousel">
                <div id="tool" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="tool" data-slide-to="0"></li>
                        <li data-target="tool" data-slide-to="1"></li>
                        <li data-target="tool" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="tools1.jpg"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="tools2.jpg"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="tools3.jpg"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#tool" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#tool" data-slide="next">
                        <span className ="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Carousel;