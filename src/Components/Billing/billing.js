import React, { Component } from "react";

class Billing extends Component{
    render(){
        return(
            <div className="menu-billing">
                <ul className="nav nav-tabs">
                    <!--all users login-->
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="make-billing">Make Billing</a>
                    </li>
                    <!--only admins-->
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="delete-billing">Delete Billing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="update-billing">Update Billing</a>
                    </li>
                    <!--all users login-->
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="find-billing">Find Billing</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Billing;