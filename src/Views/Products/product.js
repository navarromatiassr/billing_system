import React from 'react';
import ShowProducts from "./Components/show-products";


class Product extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
        <div className="container">
            <ShowProducts/>
            <button type="button" className="btn btn-primary">Add product</button>
        </div>
        )
    }
}
export default Product;