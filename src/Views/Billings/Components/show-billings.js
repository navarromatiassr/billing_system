import React from "react";
import BillingApi from "../../../Service/billing-api";


const billingApi = new BillingApi();

class ShowBillings extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            billings:[],
            id:'',
            name_client:'',
        }

    }
    componentDidMount() {
        billingApi.getBillings()
            .then(res => {
                console.log(res)
                const billings = res;
                this.setState({ billings })
            })
            .catch(e =>{
                console.log(e);
            })
    }

    render(){
        return(
            <div className="container">
            <div className="card">
                <div className="card-header">
                    <h3>Billing</h3>
                </div>
                <h4>Client</h4>
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
                                this.state.billings.map((billing, i) => (
                                    <tr>
                                        <td>  {billing.client.name}</td>
                                        <td>  {billing.client.last_name}</td>
                                        <td>  {billing.client.country}</td>
                                        <td>  {billing.client.state}</td>
                                        <td>  {billing.client.dni}</td>
                                        <td>  {billing.client.address}</td>
                                    </tr>
                                ))
                            }
                            </tbody>

                        </table>
                    </li>
                    <h4>Product List</h4>
                    <li className="list-group-item">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Code</th>
                                <th scope="col">Quantity</th>
                            </tr>
                            </thead>
                            <tbody>

                            {
                                this.state.billings.items.map((item, i) => (
                                    <tr>
                                        <td>  {item.product.name}</td>
                                        <td>  {item.product.category}</td>
                                        <td>  {item.product.price}</td>
                                        <td>  {item.product.code}</td>
                                        <td>  {item.product.quantity}</td>
                                    </tr>
                                ))
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
                                    <td>  {this.state.billing.date}</td>
                                    <td>  {this.state.billing.price}</td>

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