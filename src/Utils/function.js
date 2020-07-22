import React, { Component } from 'react';
import { clients, products, billings } from '../dates.json'

class Function extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        alert(this.state.name)
    }
    handleChangeSearch(e){
        this.setState({name: e.target.value})
    }

    handleSearchClient(e, value){
        let valor = document.getElementById("name").value;
        return valor;
    }

} export default Function;