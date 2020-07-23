import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../products.css'

class addProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
            name: '',
            category: '',
            price: '',
            },
        }
    }
    render()
        {
            return (
                <div className="addProductForm">
                    <h1>NEW PRODUCT</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>Name
                    <input type="text" name="nya" id="nya" value={this.state.product.name}
                           onChange={this.handleChange}/>
                    </div>

                    <div>Category
                    <input type="text" name="category" id="email" value={this.state.product.category}
                           onChange={this.handleChange}/>
                    </div>

                    <div>Price
                    <input type="number" name="price" id="price" placeholder="Insert price unitary."
                           value={this.state.product.price}
                           onChange={this.handleChange}/>
                    </div>
                    <div>
                    <button type="submit" className="btn btn-primary">
                        Send</button>
                    </div>
                </form>
                </div>
            );
        }
}
ReactDOM.render(<addProductForm/>, document.getElementById('root'));
export default addProductForm;
