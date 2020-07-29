import React from 'react';
import ProductApi from "../../../Service/product-api";

const productApi = new ProductApi();

class ListProducts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            items:[],
            total_price:'',
        }
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
    }

    addProductToAList(product, quantity){
        let productAndQuantity = {
            product: product,
            quantity: quantity
        }
        this.state.items.push(productAndQuantity);
        console.log(this.state.items)
    }

    handleChangeSearchNameProd(e){
        this.setState({name: e.target.value})
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


    render(){
       return(
           <div>
               <h4>PRODUCTS</h4>
               <form>
                   <input type="text" value={this.state.name} onChange={this.handleChangeSearchNameProd}/>
                   <button className="btn btn-primary" onClick={this.handleSearchProductByName}>
                       <span className="material-icons">search</span>Search
                   </button>
               </form>
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
                                   <button onClick={this.addProductToAList(product.name, this.quantity)} className="btn btn-primary">
                                       <span className="material-icons">done</span>Add
                                   </button>
                               </td>
                           </tr>
                       ))
                   }
                   </tbody>
               </table>
           </div>
       )
    }
}