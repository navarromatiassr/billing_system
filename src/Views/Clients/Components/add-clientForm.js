import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Function from "../../../Utils/function";
import '../clients.css'

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
            }
        }
    }
    render() {
        return (
            <div className="addClientForm">
                <h1>NEW CLIENT</h1>
                <form onSubmit={this.handleSubmit}>
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

                    <div>DNI:
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

