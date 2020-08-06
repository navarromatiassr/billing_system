import  React from 'react';
import 'react-router-dom'
import BillingApi from "../../../Service/billing-api";
import cutString from '../../../Utils/cut-string'

const billingApi = new BillingApi();

class ShowBillingDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            billing:{
                billHeader:{
                    client: {
                        id:'',
                    },
                    typeBill:'',
                },
                billBody: [],
                billFooter: {
                    observation:'',
                    date:'',
                    priceTotal:'',
                },
            },
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
                                <h3>ID: N°{this.state.billing.billHeader.id} - Billing</h3>
                    </div>
                    <h4>Client</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">ID Client</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Last name</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">State</th>
                                    <th scope="col">IVA Condition</th>
                                    <th scope="col">Dni</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Type Bill</th>
                                </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td> {this.state.billing.billHeader.client.id}</td>
                                            <td> {this.state.billing.billHeader.client.name}</td>
                                            <td> {this.state.billing.billHeader.client.lastName}</td>
                                            <td> {this.state.billing.billHeader.client.country}</td>
                                            <td> {this.state.billing.billHeader.client.state}</td>
                                            <td> {this.state.billing.billHeader.client.ivaCondition}</td>
                                            <td> {this.state.billing.billHeader.client.dni}</td>
                                            <td> {this.state.billing.billHeader.client.address}</td>
                                            <td> {this.state.billing.billHeader.typeBill}</td>
                                        </tr>
                                </tbody>
                            </table>
                        </li>

                        <h4>Product List</h4>
                        <li className="list-group-item">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">ID Product</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                        this.state.billing.billBody.map((product, i) => (
                                                <tr>
                                                    <td>  {product.product.id} </td>
                                                    <td>  {product.product.name}  </td>
                                                    <td>  {product.product.productCategory}  </td>
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
                                    <th scope="col">Total Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td>  {cutString(this.state.billing.billFooter.date, "T")}</td>
                                            <td>  {this.state.billing.billFooter.observation}</td>
                                            <td>  ${this.state.billing.billFooter.priceTotal}</td>
                                        </tr>

                                </tbody>
                            </table>
                            <li className="list-group-item">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th scope="col">Company Name</th>
                                        <th scope="col">CUIT</th>
                                        <th scope="col">IVA Condition</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td> MF's Company</td>
                                        <td> 20708592148</td>
                                        <td> RESPONSABLE_INSCRIPTO</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </li>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
export default ShowBillingDetails;