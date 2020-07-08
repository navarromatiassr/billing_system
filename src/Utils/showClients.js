import React from "react";
import { clients } from '../dates.json'

class showClients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients
        }
    }
    render() {
        const client_list = this.state.clients;
            return client_list.map((client, i) =>(
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
                            <tr>
                                <td>  {client_list.name}</td>
                                <td>  {client_list.last_name}</td>
                                <td>  {client_list.country}</td>
                                <td>  {client_list.state}</td>
                                <td>  {client_list.dni}</td>
                                <td>  {client_list.address}</td>
                                <td>  {client_list.email}</td>
                            </tr>
                            </tbody>
                        </table>
            )
            )
            }
}
export default showClients;