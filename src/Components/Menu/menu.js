import React from 'react';

function Menu (props){
        return (
            <div className="menu">
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Main</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/clients">Clients</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/products">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/billings">Billings</a>
                    </li>
                </ul>
            </nav>
            </div>
        );
}
export default Menu;