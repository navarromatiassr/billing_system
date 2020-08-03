import React from "react";
import BillingApi from "../../../Service/billing-api";
import { Link } from "react-router-dom"

const billingApi = new BillingApi();

class ShowBillings extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            clients:[],
            billings:[],
            routeBillingDetail : '/billings/billing-details/'
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
            <div>{
                this.state.billings.map((billing, i) => (
            <div className="container">
            <div className="card">
                <div className="card-header">


                        <h3>ID: N°{billing.id} - Billing</h3>


                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Client ID</th>
                            </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td>  {billing.footer_billing.date}</td>
                                        <td>  {billing.client.id}</td>
                                        <td>
                                            <Link to={'/billings/billing-details/'+billing.id}>
                                                <button className="btn btn-primary">Show Details</button>
                                            </Link>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </li>
                </ul>
            </div>
            </div>

                ))
                }
            </div>
                )
    }
}

export default ShowBillings;