import React from 'react';
import ClientApi from "../../../Service/client-api";


const clientApi = new ClientApi();

class EditClientForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            client: {
                "id": '',
                "name": '',
                "lastName": '',
                "country": '',
                "state": '',
                "dni": '',
                "address": '',
                "email": '',
                "ivaCondition":''
            },
            id : this.props.match.params.id
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        let client = this.state.client;
        client[e.target.name] = e.target.value;
        this.setState({client: client});
    }

    componentDidMount(){
        console.log(this.state.id)
        clientApi.getClientById(this.state.id)
            .then( res => {
                this.setState({client: res});
            })
            .catch( e => {
                console.log(e);
            })
    }

    handleSubmit(e){
        e.preventDefault();
        clientApi.editClient(this.state.client)
            .then( () => {
                console.log("Update success")
            })
            .catch( e => {
                console.log(e);
            })
        window.location = 'http://localhost:3000/clients/'
    }
    render(){
        return (
            <div className="addClientForm">
                <h1>NEW CLIENT</h1>
                <form onSubmit={this.handleSubmit} name="formClient">
                    <div>Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.client.name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.client.lastName}
                            onChange={this.handleChange}
                            className="input"
                        />
                    </div>

                    <div>Country:
                        <input
                            type="text"
                            name="country"
                            value={this.state.client.country}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>State:
                        <input
                            type="text"
                            name="state"
                            value={this.state.client.state}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="selectCondition">IVA Condition:
                        <select value={this.state.client.ivaCondition} name="ivaCondition" onChange={this.handleChange}>
                            <option value="MONOTRIBUTISTA">Monotributista</option>
                            <option value="RESPONSABLE_INSCRIPTO">Responsable Inscripto</option>
                            <option value="CONSUMIDOR_FINAL">Consumidor Final</option>
                        </select>
                    </div>

                    <div>DNI/CUIT:
                        <input
                            type="text"
                            name="dni"
                            value={this.state.client.dni}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>Address:
                        <input
                            type="text"
                            name="address"
                            value={this.state.client.address}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>Email:
                        <input
                            type="email"
                            name="email"
                            value={this.state.client.email}
                            onChange={this.handleChange}
                        />
                    </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Send</button>
                </form>
            </div>

        )
    }
}export default EditClientForm;