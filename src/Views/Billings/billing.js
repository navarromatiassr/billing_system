import React from "react";
import ShowBillings from './Components/show-billings';
import { Link } from 'react-router-dom';

class Billing extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            routeAddBilling: '/billings/add-billing'
        }
    }
    render(){
        return(
            <div className="container">
                <ShowBillings/>
                <Link to={this.state.routeAddBilling}>
                <button type="button" className="btn btn-primary">Add billing</button>
                </Link>
            </div>
        )
    }
}
export default Billing;
