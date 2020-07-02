import React, { Component } from 'react';

function Menu (props){
        return (
            <div className="menu">
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" to="/">Main</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" to="/clients">Clients</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to="/products">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to="/billings">Billings</a>
                    </li>
                </ul>
            </nav>
            </div>
        );
}
export default Menu;