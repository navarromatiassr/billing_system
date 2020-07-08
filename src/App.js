import React, {Component} from 'react';
import './App.css';
import Hi from './Hi';
import Menu from './Components/Menu/menu';
import Carousel from './Components/Carousel/carousel';
import showClients from "./Utils/showClients";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
        let showClient = new showClients();
        return (
            <div className="App">
                <Menu/>


            <body>
                <div className="container">
                    <showClient/>
                </div>
            </body>


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
