import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Function from "../../Utils/function";

class addClientForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            last_name: '',
            country: '',
            state: '',
            dni: '',
            address: '',
            email: '',
        }
    }
    render() {
        const f = new Function()
        const {name, last_name, country, state, dni, address, email} = this.state
        return (
            <div>
                <h1>Add client:</h1>
                <form onSubmit={f.handleSubmit}>
                    <label htmlFor>Name:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={f.handleChange}
                        />
                    </label>

                    <label htmlFor>Last Name:
                        <input
                            type="text"
                            name="last_name"
                            value={last_name}
                            onChange={f.handleChange}
                        />
                    </label>

                    <label htmlFor>Country:
                        <input
                            type="text"
                            name="country"
                            value={country}
                            onChange={f.handleChange}
                        />
                    </label>

                    <label htmlFor>State:
                        <input
                            type="text"
                            name="state"
                            value={state}
                            onChange={f.handleChange}
                        />
                    </label>

                    <label htmlFor>DNI:
                        <input
                            type="number"
                            name="dni"
                            value={dni}
                            onChange={f.handleChange}
                        />
                    </label>

                    <label htmlFor>Address:
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={f.handleChange}
                        />
                    </label>

                    <label htmlFor>Email:
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={f.handleChange}
                        />
                    </label>

                    <button type="submit">Send</button>
                </form>
                <div>
                    <h2>Values of the form</h2>
                    <p>Name: {this.state.name}</p>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<addClientForm />, document.getElementById('root'));
export default addClientForm;

