import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductApi from "../../../Service/product-api";
import '../products.css'

const productApi = new ProductApi();

class addProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notification:[],
            product: {
            "name": '',
            "category": '',
            "price": '',
            },
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        productApi.addProduct(this.state.product)
            .then(res => {
                console.log(res.data);
            })
            .catch( e => {
                console.log(e);
            });
        this.restartInput();
    }

    restartInput(){
        const product= {
            "name": '',
            "category": '',
            "price": '',
        }
        this.setState({product})
    }

    handleChange = (e) => {
        let product = this.state.product;
        product[e.target.name] = e.target.value;
        this.setState({product: product});
    }

    render()
        {
            return (
                <div className="addProductForm">
                    <h1>NEW PRODUCT</h1>
                <form onSubmit={this.handleSubmit} name="formProduct">
                    <div>Name
                    <input type="text" name="name" value={this.state.product.name}
                           onChange={this.handleChange}/>
                    </div>

                    <div className="selectCondition">Category:
                        <select value={this.state.product.category} name="category" onChange={this.handleChange}>
                            <option value="HOGAR"> Hogar</option>
                            <option value="PINTURERIA"> Pintureria</option>
                            <option value="CONSTRUCCION"> Construccion</option>
                            <option value="CARPINTERIA"> Carpinteria</option>
                            <option value="ELECTRICIDAD"> Electricidad</option>
                        </select>
                    </div>

                    <div>Price
                    <input type="number" name="price" placeholder="Insert price unitary."
                           value={this.state.product.price}
                           onChange={this.handleChange}/>
                    </div>
                    <div>
                    <button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit} >
                        Send</button>
                    </div>
                </form>
                </div>
            );
        }
}
ReactDOM.render(<addProductForm/>, document.getElementById('root'));
export default addProductForm;
