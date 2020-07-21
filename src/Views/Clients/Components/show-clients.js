import React from "react";
import { clients } from '../../../dates.json'

class ShowClients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients
        }
    }
    componentDidMount() {
        console.log(this.state.clients)
    }

    render() {
        const client_list = this.state.clients;
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Country</th>
                    <th scope="col">State</th>
                    <th scope="col">Dni</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody>

                {
                    client_list.map((client, i) => (
                        <tr>
                            <td>  {client.name}</td>
                            <td>  {client.last_name}</td>
                            <td>  {client.country}</td>
                            <td>  {client.state}</td>
                            <td>  {client.dni}</td>
                            <td>  {client.address}</td>
                            <td>  {client.email}</td>
                            <td>
                                <button type="button" className="btn btn-primary">Edit</button>
                                <button type="button" className="btn btn-primary">Delete</button>
                            </td>
                        </tr>

                    ))
                }
                </tbody>
            </table>

        )
    }
}

export default ShowClients;