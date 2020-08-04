import React, { Component } from 'react';
import ProductApi from "../../../Service/product-api";
import '../products.css'


const productApi = new ProductApi();

class editProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                "name": '',
                "productCategory": '',
                "price": '',
            },
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
        productApi.getProductById(this.props.match.params.id)
            .then( res => {
                this.setState({product: res});
            })
            .catch( e => {
                console.log(e);
            })
    }

    handleSubmit = e => {
        e.preventDefault();
        productApi.editProduct(this.state.product)
            .then(res => {
                console.log(res.data);
            })
            .catch( e => {
                console.log(e);
            });
        window.location = 'http://localhost:3000/products/'
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
                        <select value={this.state.product.productCategory} name="productCategory" onChange={this.handleChange}>
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
}export default editProductForm;