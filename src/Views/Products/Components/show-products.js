import React from "react";
import ProductApi from '../../../Service/product-api'
import {Link} from "react-router-dom";

const productApi = new ProductApi();


class ShowProducts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           products: [],
           name: '',
           routeEdit : '/products/edit-product',
        }
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleChangeSearchName = this.handleChangeSearchName.bind(this);
        this.handleSearchProductByName = this.handleSearchProductByName.bind(this);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this);

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
    handleChangeSearch(e){
        this.setState({id: e.target.value})
    }

    handleChangeSearchName(e){
        this.setState({name: e.target.value})
    }


    handleDeleteProduct(e, id){
        e.preventDefault()
        productApi.deleteProduct(id)
            .then( res => {
                console.log(res)
                window.location.reload();
            })
            .catch(e => {
                console.log(e)
            });
    }

    handleSearchProductByName(e){
        e.preventDefault()
        productApi.getProductsByName(this.state.name)
            .then( res => {
                console.log(res)
                this.setState({ products: res})
            })
            .catch(e => {
                console.log(e)
            });
    }

    render(){
        return (
            <div>
            <div className="filterProducts">
                <form>
                    <input type="text" placeholder="Product Name" value={this.state.name} onChange={ this.handleChangeSearchName}/>
                    <button className="btn btn-primary" onClick={this.handleSearchProductByName}>
                        <span className="material-icons">search</span>Search</button>
                </form>
            </div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>

                {
                    this.state.products.map((product, i) => (
                        <tr>
                            <td>  {product.id}</td>
                            <td>  {product.name}</td>
                            <td>  {product.category}</td>
                            <td>  ${product.price}</td>
                            <td> <Link to={this.state.routeEdit+'/'+product.id}><button className="btn btn-primary">
                                <span className="material-icons">restore_from_trash</span>Edit</button></Link></td>
                            <td> <button className="btn btn-danger" onClick={ e => (this.handleDeleteProduct(e, product.id))}>
                                <span className="material-icons">restore_from_trash</span>Delete</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            </div>
        )
    }
}

export default ShowProducts;