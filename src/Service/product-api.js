import axios from 'axios';
const BASE = 'http://localhost:8080/api/';

class ProductApi{

    async getProducts(){
        const query = await axios.get( `${BASE}products/all`)
        const data = query.data
        return data;
    }

    async getProductsByName(name){
        const query = await axios.get(`${BASE}search_product?name=${name}`)
        const data = query.data
        return data;
    }

    async getProductById(id){
        const query = await axios.get(`${BASE}select_product/${id}`)
        const data = query.data
        return data;
    }

    async addProduct(product){
        const productJson = JSON.stringify(product)
        const query = await axios.post(`${BASE}product`, productJson,{
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("Product success!")
        const data = query.data
        return data;
    }

    async editProduct(product){
        const productJson = JSON.stringify(product)
        const query = await axios.put(`${BASE}product/edit`, productJson,{
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("Product success!")
        const data = query.data
        return data;
    }

    async deleteProduct(id){
        const query = await axios.put(`${BASE}product/delete/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("Delete success!")
        const data = query.data;
        return data;
    }

}export default ProductApi;

