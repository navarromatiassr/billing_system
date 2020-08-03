import React, { Component } from 'react';
import ProductApi from "../../../Service/product-api";
import ClientApi from "../../../Service/client-api";
import BillingApi from "../../../Service/billing-api";
import ReactDOM from "react-dom";


const productApi = new ProductApi();
const clientApi = new ClientApi();
const billingApi = new BillingApi();



class AddBillingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameProduct:'',
            nameClient:'',
            clients:[],
            products: [],
            date:'',
            quantity: 0,
            observation:'',
            total_price: 0,
            billing: {
                client: {
                    id:'',
                },
                products: [],
                "footer_billing": {
                    observation:'',
                    date:''
                },
            },
            routeBackToBillings : '/billings/'
        }
        this.handleSearchProductByName = this.handleSearchProductByName.bind(this);
        this.handleChangeSearchNameClient = this.handleChangeSearchNameClient.bind(this);
        this.handleChangeSearchNameProduct = this.handleChangeSearchNameProduct.bind(this);
        this.handleSearchClient = this.handleSearchClient.bind(this);
        this.selectClient = this.selectClient.bind(this);
        this.handleChangeSearchQuantity = this.handleChangeSearchQuantity.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.subTotal = this.subTotal.bind(this);
        this.handleCreateBilling = this.handleCreateBilling.bind(this);
        this.handleChangeObservation = this.handleChangeObservation.bind(this);
    }

    handleChangeDate(e){
        this.state.billing.footer_billing.date = e.target.value
        this.setState({billing: this.state.billing })
    }

    handleChangeObservation(e){
        let billing = this.state.billing;
        billing.footer_billing.observation = e.target.value;
        this.setState({billing: billing})
    }

    addProductToAList(id, price, quantity, e){
        e.preventDefault();
        console.log(id, price, quantity)
        let item = {
            product: {
                "id": id,
                "price": Number(price)
            },
            "quantity": quantity
        };
        this.state.billing.products.push(item);
        this.setState({ billing : this.state.billing})
        console.log("Product pushed success!")
        console.log(this.state.billing.products)
    }

    selectClient(client, e){
        e.preventDefault();
        let item = {
            "id" : client
        }
        this.state.billing.client = item
        this.setState({billing: this.state.billing})
        console.log("Client success added!", this.state.billing)
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

    handleChangeSearchNameClient(e){
        this.setState({nameClient: e.target.value})
    }

    handleChangeSearchQuantity(e){
        this.setState({quantity: e.target.value})
    }

    handleChangeSearchNameProduct(e){
        this.setState({nameProduct: e.target.value})
    }

    handleSearchClient(e){
        e.preventDefault()
        clientApi.getClientByName(this.state.nameClient)
            .then(res => {
                console.log(res);
                this.setState({ clients:  res });
            })
            .catch( e => {
                console.log(e)
            });
    }

    handleSearchProductByName(e){
        e.preventDefault()
        productApi.getProductsByName(this.state.nameProduct)
            .then( res => {
                console.log(res)
                this.setState({ products: res})
            })
            .catch(e => {
                console.log(e)
            });
    }

    subTotal(e){
        e.preventDefault();
        let subTotal = 0;
        this.state.total_price = 0;
        this.state.billing.products.forEach(item => {
            subTotal = item.product.price * item.quantity
            this.state.total_price = this.state.total_price + subTotal
        })
        this.setState({ total_price : this.state.total_price})
        console.log("Mount: ", this.state.total_price)
    }

    handleCreateBilling (e){
        e.preventDefault();
        console.log(this.state.billing)
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
            <div><h1>NEW BILLING</h1>
            <div className="billing-clientPlace"><h4>Client</h4>
                <form name="formClient">
                    <input type="text" value={this.state.nameClient} onChange={this.handleChangeSearchNameClient}/>
                    <button onClick={this.handleSearchClient} className="btn btn-primary">
                        <span className="material-icons">person_search</span>Search
                    </button>

                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">DNI </th>
                                    <th scope="col">NAME </th>
                                    <th scope="col">LAST NAME </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                this.state.clients.map((client, i) => (
                                        <tr>
                                            <td>  {client.dni}</td>
                                            <td>  {client.name}</td>
                                            <td>  {client.last_name}</td>

                                            <td>
                                                <button onClick={e => this.selectClient(client.id, e)} className="btn btn-primary">
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

                <h4>Products</h4>
                    <input type="text" value={this.state.nameProduct} onChange={this.handleChangeSearchNameProduct}/>
                     <button onClick={this.handleSearchProductByName} className="btn btn-primary">
                         <span className="material-icons">person_search</span>Search
                     </button>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
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
                                <td>
                                    <input type="number" placeholder="Quantity" name="quantity" value={this.state.quantity} onChange={this.handleChangeSearchQuantity}/>
                                    <button onClick= {e => this.addProductToAList(product.id, product.price, this.state.quantity, e)} className="btn btn-primary">
                                        <span className="material-icons">done</span>Add
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                </form>
            </div>

            <h4>Footer</h4>
                <div className="setFooter">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                        <form>
                            <div>Date</div>
                            <input type="date" name="date" id="date" value={this.state.billing.footer_billing.date}
                                   onChange={this.handleChangeDate}/>
                        </form>
                        </div>

                        <div className="col-sm-4">
                            <input type="text" value={this.state.billing.footer_billing.observation} placeholder="observations"
                                   onChange={this.handleChangeObservation}/>
                        </div>

                        <div className="col-sm-4">
                            <div className="btn-totalPrice">
                                <button onClick={this.subTotal} className="btn btn-success">MAKE TOTAL PRICE</button>
                                <p>${this.state.total_price}</p>
                            </div>
                        </div>
                    </div>
                    </div>


                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Total Price</th>
                                <th scope="col">Date</th>
                                <th scope="col">Observations</th>
                            </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>  ${this.state.billing.footer_billing.total_price}</td>
                            <td>  {this.state.billing.footer_billing.date}</td>
                            <td>  {this.state.billing.footer_billing.observation}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                <div>
                        <button className="btn btn-primary" type="submit" onClick={this.handleCreateBilling}>Submit</button>
                </div>
                </div>
        )
    }
}ReactDOM.render(<addBillingForm />, document.getElementById('root'));
export default AddBillingForm;