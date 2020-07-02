import React from 'react';
import './App.css';
import Hi from './Hi';
import Menu from './Components/Menu/menu';
import Carousel from './Components/Carousel/carousel';
import addClientForm from "./Components/Forms/add-clientForm";
import addProductForm from "./Components/Forms/add-productForm";

function App() {
  return (
    <div className="App">
      <Menu/>

      <header className="App-header">
          <div className="container">
          </div>
          <addClientForm />
          <addProductForm />
      </header>
        <body>

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
export default App;
