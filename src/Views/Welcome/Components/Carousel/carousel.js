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

            <p>Billing System es un proyecto APP-Web realizado por los alumnos
                LUNA Facundo - NAVARRO Matias, estudiantes de la facultad
                de Ingeniería Universidad de Mendoza.
                Agregá  y almacena a tus clientes, tus productos,
                y llevá a cabo la facturación de tus ventas
                de la manera más sencilla y con el mejor control de historial posible."</p>
        </div>
            </div>
        )
    }
}

export default Carousel;