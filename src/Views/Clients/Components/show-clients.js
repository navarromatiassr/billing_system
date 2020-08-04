import React from "react";
import ClientApi from "../../../Service/client-api";
import {Link} from "react-router-dom";

const clientApi = new ClientApi();

class ShowClients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            dni: '',
            routeEdit : '/clients/edit-client'
        }
        this.handleSearchClient = this.handleSearchClient.bind(this);
        this.handleDeleteClient = this.handleDeleteClient.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleChangeSearchDni = this.handleChangeSearchDni.bind(this);

    }
    componentDidMount() {
        clientApi.getClients()
            .then(res => {
                console.log(res)
                const clients = res;
                this.setState({ clients });
            })
            .catch(e => {
                console.log(e)
            });
    }

    handleChangeSearch(e){
        this.setState({dni: e.target.value})
    }

    handleChangeSearchDni(e){
        this.setState({dni: e.target.value})
    }


    handleSearchClient(e){
        e.preventDefault()
        clientApi.getClientByDNI(this.state.dni)
            .then(res => {
                console.log(res);
                this.setState({ clients: res });
            })
            .catch( e => {
                console.log(e)
            });
    }

    handleDeleteClient(e){
        e.preventDefault()
        clientApi.deleteClient(this.state.dni)
            .then(res => {
                console.log(res);
                window.location.reload()
            })
            .catch(e => {
              console.log(e);
            })
    }

    render() {
        return (
            <div>
                <div className="filterClients">
                    <form>
                        <input type="text" placeholder="Client DNI" value={this.state.dni} onChange={this.handleChangeSearchDni}/>
                        <button onClick={this.handleSearchClient} className="btn btn-primary">
                            <span className="material-icons">person_search</span>Search</button>
                    </form>

                    <form>
                        <input type="text" placeholder="Client DNI" value={this.state.clients.dni} onChange={this.handleChangeSearch}/>
                        <button className="btn btn-danger" onClick={this.handleDeleteClient}>
                            <span className="material-icons">restore_from_trash</span>Delete</button>
                    </form>

                </div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Country</th>
                    <th scope="col">IVA Condition</th>
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
                            <td>  {client.id}</td>
                            <td>  {client.name}</td>
                            <td>  {client.lastName}</td>
                            <td>  {client.country}</td>
                            <td>  {client.ivaCondition}</td>
                            <td>  {client.state}</td>
                            <td>  {client.dni}</td>
                            <td>  {client.address}</td>
                            <td>  {client.email}</td>
                            <div> <Link to={this.state.routeEdit+'/'+client.id}><button className="btn btn-primary">
                                <span className="material-icons">restore_from_trash</span>Edit</button></Link></div>
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