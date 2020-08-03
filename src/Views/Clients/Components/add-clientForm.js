import React, { Component } from "react";
import ReactDOM from 'react-dom';

import '../clients.css'
import ClientApi from "../../../Service/client-api";

const clientApi = new ClientApi();

class addClientForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            client: {
                "name": '',
                "last_name": '',
                "country": '',
                "state": '',
                "dni": '',
                "address": '',
                "email": '',
                "condition":''
            }
        }
    }
    handleChange = (e) => {
        let client = this.state.client;
        client[e.target.name] = e.target.value;
        this.setState({client: client});
    }

    restartInput(){
        const client= {
            "name": '',
            "last_name": '',
            "country": '',
            "state": '',
            "dni": '',
            "address": '',
            "email": '',
            "condition": ''
        };
        this.setState({client})
    }


    handleSubmit = e => {
        e.preventDefault();
        clientApi.addClient(this.state.client)
            .then(res => {
                console.log(res.data);
            })
            .catch( e => {
                console.log(e);
            });
        this.restartInput();
        window.location = 'http://localhost:3000/clients/'
    }

    render() {
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
                            name="last_name"
                            value={this.state.client.last_name}
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

                    <div className="selectCondition">Condition:
                        <select>
                            <option value="value1">Monotributista</option>
                            <option value="value2">Responsable Inscripto</option>
                            <option value="value3">Consumidor Final</option>
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
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>

        )
    }
}
ReactDOM.render(<addClientForm />, document.getElementById('root'));
export default addClientForm;

