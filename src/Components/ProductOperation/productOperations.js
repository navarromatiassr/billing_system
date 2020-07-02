import React, { Component } from "react";

class productOperations extends Component{
    render(){
        return(
            <div className="menu-product-operations">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="add-product">Add product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="delete-product">Delete product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="update-product">Update product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="find-product">Find product</a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default productOperations;