import React, { Component } from 'react';
import ProductApi from "../../../Service/product-api";
import ClientApi from "../../../Service/client-api";
import BillingApi from "../../../Service/billing-api";

const productApi = new ProductApi();
const clientApi = new ClientApi();
const billingApi = new BillingApi();

class AddBillingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clients:[],
            products: [],
            billing: {
                client: {
                },
                name:'',
                last_name:'',
                dni:'',
                items: [{
                    "quantity": ''},
                ],
                "date": '',
                footer_billing: {
                    "total_price":'',
                    "observation":'',
                },
            },
        }
        this.handleSearchProductByName = this.handleSearchProductByName.bind(this);
        this.handleChangeSearchName = this.handleChangeSearchName.bind(this);
        this.handleSearchClient = this.handleSearchClient.bind(this);
        this.selectClient = this.selectClient.bind(this);
    }

    componentDidMount(){
        productApi.getProducts()
            .then( res => {
                console.log(res)
                const products = res;
                this.setState( { products } );
            })
            .catch(e => {
                console.log(e)
            });
        clientApi.getClients()
            .then(res => {
                const clients = res;
                this.setState({ clients });
            })
            .catch(e => {
                console.log(e)
            });
    }

    handleChange = (e) => {
        let billing = this.state.billing;
        billing[e.target.name] = e.target.value;
        this.setState({billing : billing});
    }


    addProductToAList(product, quantity){
        let productAndQuantity = {
            product: product,
            quantity: quantity
        }
        this.state.billing.items.push(productAndQuantity);
        console.log("Product pushed success!")
    }

    selectClient(client){
        console.log(client);
        this.setState({client: {client}})
        this.state.billing.client = client
        console.log("Client success added!")
    }

    handleSearchProductByName(e) {
        e.preventDefault()
        productApi.getProductsByName(this.state.name)
            .then(res => {
                console.log(res)
                this.setState({products: res})
            })
            .catch(e => {
                console.log(e)
            });
    }
    handleChangeSearchName(e){
        this.setState({name: e.target.value})
    }


    handleSearchClient(e){
        e.preventDefault()
        clientApi.getClientByName(this.state.name)
            .then(res => {
                console.log(res);
                this.setState({ clients: { res }});
            })
            .catch( e => {
                console.log(e)
            });
    }

    subTotal(items){
        let i
        let price
        for(this.state.billing.items; i = this.items.lenght; i++){
            price = this.state.billing.items.product.price + this.price
        }this.setState({total_price :{ price}})
        console.log("Price success added!", price)
    }

    handleSubmit = e => {
        e.preventDefault();
        billingApi.createBilling(this.state.billing)
            .then(res => {
                console.log(res.data);
            })
            .catch( e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div><h4>CLIENT</h4>
                <form>
                    <input type="text" value={this.state.name} onChange={this.handleChangeSearchName}/>
                    <button onClick={this.handleSearchClient} className="btn btn-primary">
                        <span className="material-icons">person_search</span>Search
                    </button>
                </form>

                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">DNI CLIENT</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                this.state.clients.map((client, i) => (
                                        <tr>
                                            <td>  {client.dni}</td>

                                            <td>
                                                <button onClick={this.selectClient} value={this.state.name} className="btn btn-primary">
                                                    <span className="material-icons">person_search</span>Add
                                                </button>
                                            </td>
                                        </tr>
                                ))
                                }
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </div>

                <h4>PRODUCTS</h4>

                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">CODE-ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Select</th>
                        <th scope="col">Quantity</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.products.map((product, i) => (
                            <tr>
                                <td>  {product.id}</td>
                                <td>  {product.name}</td>
                                <td>  ${product.price}</td>
                                <td>  {product.code}</td>
                                <td>
                                    <input type="text" placeholder="Quantity" value={this.quantity}/>
                                    <button onClick={this.addProductToAList(product, this.quantity)} className="btn btn-primary">
                                        <span className="material-icons">done</span>Add
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>


                <form onSubmit={this.handleSubmit}>
                    <div>Date</div>

                    <input type="date" name="date" id="date" required value={this.state.date}
                           onChange={this.handleChange}/>
                    <br/><br/>

                </form>

                <input type="text" value={this.state.billing.footer_billing.observation} placeholder="observations"/>
                <button onClick={this.handleChange}/>
            <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        )
    }
}
export default AddBillingForm;