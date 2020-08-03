import React, {Component} from 'react';
import './App.css';
import Menu from './Components/Menu/menu';
import Client from './Views/Clients/client';
import Product from './Views/Products/product';
import Welcome from "./Views/Welcome/welcome-main";
import Billing from "./Views/Billings/billing";
import addClientForm from "./Views/Clients/Components/add-clientForm";
import addProductForm from "./Views/Products/Components/add-productForm";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddBillingForm from "./Views/Billings/Components/add-billingForm";
import ShowBillingDetails from "./Views/Billings/Components/show-billingDetails";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
        return (
            <div className="App">
                <div className="wrapper-main">
                <Menu/>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={ Welcome } />
                        <Route path='/clients' exact component={ Client } />
                        <Route path='/clients/add-client' exact component={ addClientForm } />
                        <Route path='/products' exact component={ Product } />
                        <Route path='/products/add-product' exact component={ addProductForm } />
                        <Route path='/billings' exact component={ Billing } />
                        <Route path='/billings/add-billing' exact component={ AddBillingForm } />
                        <Route path='/billings/billing-details/:id' exact component={ ShowBillingDetails }/>
                    </Switch>
                </BrowserRouter>
                </div>
            <footer className="App-footer">
                <div className="d-flex justify-content-center">
                    <div className="p-2 bg-primary flex-fill">Facebook</div>
                    <div className="p-2 bg-info flex-fill">Gmail</div>
                    <div className="p-2 bg-primary flex-fill">Wspp</div>
                </div>
            </footer>
            </div>
                );
            }
        }
export default App;
