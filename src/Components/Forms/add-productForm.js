import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Function from "../../Utils/function";

class addProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            category: '',
            price: '',
        }
    }
    render()
        {
            const {name, category, price} = this.state
            const f = new Function();
            return (
                <form onSubmit={f.handleSubmit}>
                    <label for="nya">Name</label>
                    <br/>
                    <input type="text" name="nya" id="nya" value={name}
                           onChange={f.handleChange}/>
                    <br/><br/>
                    <label for="category">Category</label>
                    <br/>
                    <input type="text" name="category" id="email" value={category}
                           onChange={f.handleChange}/>
                    <br/><br/>
                    <label for="price">Price</label>
                    <br/>
                    <input type="number" name="price" id="price" placeholder="Insert price unitary." value={price}
                           onChange={f.handleChange}/>
                    <br/><br/>
                    <input type="submit" value="send"/>
                </form>
            );
        }
}
ReactDOM.render(<addProductForm/>, document.getElementById('root'));
export default addProductForm;
