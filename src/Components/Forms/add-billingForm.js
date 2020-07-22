import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Function from "../../Utils/function";
import addClientForm from "../../Views/Clients/Components/add-clientForm";
import Function from "../../Utils/function";

class addBillingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            price: '',
        }
        render()
        {
            const {date, price,} = this.state
            const f = new Function();
            return(
            <form onSubmit={f.handleSubmit}>
                <label htmlFor="date">Date</label>
                <br/>
                <input type="date" name="date" id="date" required value={date}
                       onChange={f.handleChange}/>
                <br/><br/>
                <label htmlFor="price">Price</label>
                <br/>
                <input type="number" name="price" id="price" placeholder="Insert price unitary." value={price}
                       onChange={f.handleChange}/>
                <br/><br/>
                <input type="submit" value="send"/>
            </form>
            )
        }
    }
}
