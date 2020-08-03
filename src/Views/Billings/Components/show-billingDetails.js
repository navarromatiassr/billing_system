import  React from 'react';
import 'react-router-dom'
import BillingApi from "../../../Service/billing-api";

const billingApi = new BillingApi();

class ShowBillingDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            billing:{
                client:{
                    id:''
                },
                products:[ ],
                footer_billing:{
                }
            }
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        billingApi.getBillingById(this.props.match.params.id)
            .then(res => {
                console.log(res)
                const billing = res;
                this.setState({ billing })
            })
            .catch(e =>{
                console.log(e);
            })

    }

    render() {
        return (
            <div>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                                <h3>ID: N°{this.state.billing.id} - Billing</h3>
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
                                        <tr>
                                            <td> {this.state.billing.client.id}</td>
                                        </tr>
                                </tbody>
                            </table>
                        </li>

                        <h4>Product List</h4>
                        <li className="list-group-item">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                        this.state.billing.products.map((product, i) => (
                                                <tr>
                                                    <td>  {product.product.id} </td>
                                                    <td>                        </td>
                                                    <td>                        </td>
                                                    <td>  ${product.product.price}</td>
                                                    <td>  {product.quantity}</td>
                                                </tr>
                                            )
                                        )
                                }
                                </tbody>
                            </table>
                        </li>
                        <li className="list-group-item">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Observations</th>
                                </tr>
                                </thead>
                                <tbody>

                                        <tr>
                                            <td>  {this.state.billing.date}</td>
                                            <td>  {this.state.billing.footer_billing.observation}</td>
                                        </tr>

                                </tbody>
                            </table>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
export default ShowBillingDetails;