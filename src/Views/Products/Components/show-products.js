import React from "react";
import { products } from "../../../dates.json"

class ShowProducts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           products
        }
    }
    render(){
        const product_list = this.state.products;
        return (
            <div>
            <div className="filterProducts">
                <form>
                    <input type="text" placeholder="Product ID"/>
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Code</th>
                </tr>
                </thead>
                <tbody>

                {
                    product_list.map((product, i) => (
                        <tr>
                            <td>  {product.name}</td>
                            <td>  {product.category}</td>
                            <td>  {product.price}</td>
                            <td>  {product.code}</td>

                            <td>
                                <button type="button" className="btn btn-primary">Edit</button>
                                <button type="button" className="btn btn-primary">Delete</button>
                            </td>
                        </tr>

                    ))
                }
                </tbody>
            </table>
            </div>
        )
    }
}

export default ShowProducts;