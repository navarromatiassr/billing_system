import React from "react";
import BillingApi from "../../../Service/billing-api";
import { Link } from "react-router-dom"
import '../billing.css'

const billingApi = new BillingApi();

class ShowBillings extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            items:[],
            clients:[],
            billings:[],
            routeBillingDetail : '/billings/billing-details/'
        }
        this.handleChangeSearchId = this.handleChangeSearchId.bind(this);
        this.handleSearchClient = this.handleSearchClient.bind(this);
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

    handleChangeSearchId(e){
        this.setState({id: e.target.value})
    }

    handleSearchClient(id, e){
        e.preventDefault()
        billingApi.getBillingByIdClient(id)
            .then(res => {
                console.log(res);
                this.setState({ billings: res });
            })
            .catch( e => {
                console.log(e)
            });
    }

    handleDeleteBilling(id, e){
        e.preventDefault()
        billingApi.deleteBilling(id)
            .then(res => {
                console.log(res);
                window.location.reload()
            })
            .catch(e => {
                console.log(e);
            })
    }

    render(){
        return(
            <div>
                <div className="filterBillings">
                <form>
                    <input type="text" placeholder="Client ID" value={this.state.id} onChange={this.handleChangeSearchId}/>
                    <button onClick={ e => this.handleSearchClient(this.state.id, e)} className="btn btn-primary">
                        <span className="material-icons">person_search</span>Search</button>
                </form>
                </div>
                {
                this.state.billings.map((billing, i) => (
            <div className="container">
            <div className="card">
                <div className="card-header">

                    <h3>BILLING ID N°<b>{billing.billHeader.id}</b></h3>

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
                                        <td>  {billing.billFooter.date}</td>
                                        <td>  {billing.billHeader.client.id}</td>
                                        <td>
                                            <Link to={'/billing/select/'+billing.billHeader.id}>
                                                <button className="btn btn-primary">Show Details</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={ e =>(this.handleDeleteBilling(billing.billHeader.id, e))}>
                                                <span className="material-icons">restore_from_trash</span>Disable</button>
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