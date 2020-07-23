import React from "react";
import ClientApi from "../../../Service/client-api";

const clientApi = new ClientApi();

class ShowClients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: []
        }
    }
    componentDidMount() {
        clientApi.getClients()
            .then(res => {
                const clients = res.data;
                this.setState({ clients });
            })
            .catch(e => {
                console.log(e)
            });
    }
    updateListClient(){
        clientApi.getClients()
            .then( res => {
                console.log(res);
                console.log(res.data);
            })
            .catch( e => {
                console.log(e)
            });
    }
    handleChangeSearch(e){
        this.setState({name: e.target.value})
    }

    handleSearchClient(e){
        e.preventDefault()
        clientApi.getClientByDNI(this.state.dni)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch( e => {
                console.log(e)
            });
    }

    render() {
        return (
            <div>
                <div className="filterClients">
                    <form>
                        <input type="text" placeholder="Client DNI" value={this.state.dni} onChange={this.handleChangeSearch}/>
                        <button onClick={this.handleSearchClient} className="btn btn-primary">Search</button>
                    </form>
                    <button className="btn btn-primary" onClick={this.updateListClient}>Update list</button>
                </div>
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
                    this.state.clients.map((client, i) => (
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
            </div>

        )
    }
}

export default ShowClients;