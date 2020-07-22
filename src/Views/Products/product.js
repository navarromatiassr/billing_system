import React from 'react';
import ShowProducts from "./Components/show-products";
import {Link} from "react-router-dom";


class Product extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            routeAddProduct: '/products/add-product'
        }
    }
    render(){
        return(
        <div className="container">
            <ShowProducts/>
            <Link to={this.state.routeAddProduct}>
            <button type="button" className="btn btn-primary">Add product</button>
            </Link>
        </div>
        )
    }
}
export default Product;