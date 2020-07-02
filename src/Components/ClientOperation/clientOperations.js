import React, { Component } from "react";

class ClientOperations extends Component{
    render(){
        return(
            <div className="menu-client-operations">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="add-client">Add addClientForm</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="delete-client">Delete addClientForm</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="update-client">Update addClientForm</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="find-client">Find addClientForm</a>
                    </li>
                </ul>
            </div>
        )
    }
};

export default ClientOperations;