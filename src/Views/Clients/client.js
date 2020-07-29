import React from 'react';
import ShowClients from "./Components/show-clients";
import { Link } from 'react-router-dom';

class Client extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            client: {
                "name": '',
                "last_name": '',
                "country": '',
                "state": '',
                "dni": '',
                "address": '',
                "email": '',
            },
            routeAddClient: '/clients/add-client'
        }
    }

    render(){
        return(
            <div className="container">
                <ShowClients/>
                <div>
                    <Link to={this.state.routeAddClient}>
                        <button type="button" className="btn btn-outline-primary">
                            Add client</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Client;