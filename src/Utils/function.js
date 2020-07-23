import React, { Component } from 'react';
import { clients, products, billings } from '../dates.json'

class Function extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            clients,
            products,
            billings,
        }
    }
    handleChange = (e) => {
        let client = this.state.client;
        client[e.target.name] = e.target.value;
        this.setState({client: client});
    }

    handleSubmit = (e) => {
        e.preventDefault()
        alert(this.state.name)
    }
    handleChangeSearch(e){
        this.setState({name: e.target.value})
    }

    handleSearchClient(e){
        let valor = document.getElementById("name").value;
        if (valor == this.clients.name){
            return this.clients.name
        }
        else{
            return null;
        }
    }
    saveClientFormJSON(e){
        const fs = require('fs');
        let name = document.forms["formClient"]["name"].value;
        let last_name = document.forms["formClient"]["last_name"].value;
        let country = document.forms["formClient"]["country"].value;
        let state = document.forms["formClient"]["state"].value;
        let dni = document.forms["formClient"]["dni"].value;
        let address = document.forms["formClient"]["address"].value;
        let email = document.forms["formClient"]["email"].value;

        let client = {
            "name": name,
            "last_name": last_name,
            "country": country,
            "state": state,
            "dni": dni,
            "address": address,
            "email": email,
        }
        let data = JSON.stringify(client);
        fs.writeFileSync('clients.json', data);
        this.finishedSave();
    }

    finishedSave(e){
        console.log('success');
    }


} export default Function;