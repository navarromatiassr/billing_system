import React from 'react';
import ShowClients from "./Components/show-clients";

class Client extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <ShowClients/>
                <button type="button" className="btn btn-primary">Add client</button>
            </div>
        )
    }
}
export default Client;