import React from 'react';
import './menu.css'

function Menu (props){
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span className="material-icons">account_balance</span>Main</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/clients">
                            <span className="material-icons">perm_identity</span>Clients</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/products">
                            <span className="material-icons">shopping_cart</span>Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/billings">
                            <span className="material-icons">table_view</span>Billings</a>
                    </li>
                </ul>
            </nav>
            </div>
        );
}
export default Menu;