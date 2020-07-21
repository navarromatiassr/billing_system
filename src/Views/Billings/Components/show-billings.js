import React from "react";
import { billings, products, clients } from '../../../dates.json';


class ShowBillings extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            billings,
            clients,
            products,
        }

    }
    componentDidMount() {
        console.log(this.state.clients[1])
    }
    render(){
        const billing = this.state.billings[0];
        const client = this.state.clients[0];
        const product = this.state.products[1];
        return(
            <div className="container">
            <div className="card">
                <div className="card-header">
                    <h3>Comprobante de venta</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Country</th>
                                <th scope="col">State</th>
                                <th scope="col">Dni</th>
                                <th scope="col">Address</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                    <tr>
                                        <td>  {client.name}</td>
                                        <td>  {client.last_name}</td>
                                        <td>  {client.country}</td>
                                        <td>  {client.state}</td>
                                        <td>  {client.dni}</td>
                                        <td>  {client.address}</td>
                                    </tr>

                            }
                            </tbody>

                        </table>
                    </li>
                    <li className="list-group-item">
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
                                    <tr>
                                        <td>  {product.name}</td>
                                        <td>  {product.category}</td>
                                        <td>  {product.price}</td>
                                        <td>  {product.code}</td>

                                    </tr>
                            }
                            </tbody>
                        </table>
                    </li>

                    <li className="list-group-item">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Price Total</th>

                            </tr>
                            </thead>
                            <tbody>

                            {
                                <tr>
                                    <td>  {billing.date}</td>
                                    <td>  {billing.price}</td>

                                </tr>
                            }
                            </tbody>
                        </table>
                    </li>
                </ul>
            </div>
            </div>
                )
    }
}

export default ShowBillings;