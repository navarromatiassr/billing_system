import React, { Component } from 'react';

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

} export default Function;