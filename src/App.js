import React, {Component} from 'react';
import './App.css';
import Menu from './Components/Menu/menu';
import Client from './Views/Clients/client';
import Product from './Views/Products/product';
import Welcome from "./Views/Welcome/welcome-main";
import Billing from "./Views/Billings/billing";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
        return (
            <div className="App">
                <Menu/>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={ Welcome } />
                        <Route path='/clients' exact component={ Client } />
                        <Route path='/products' exact component={ Product } />
                        <Route path='/billings' exact component={ Billing } />
                    </Switch>
                </BrowserRouter>
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
