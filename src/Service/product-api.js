import axios from 'axios';
const BASE = 'http://localhost:3005/';

class ProductApi{

    async getProducts(){
        const query = await axios.get( `${BASE}products-api`)
        const data = query.data
        return data;
    }

    async getProductsByName(name){
        const query = await axios.get(`${BASE}products-api?name=${name}`)
        const data = query.data
        return data;
    }

    async addProduct(product){
        const productJson = JSON.stringify(product)
        const query = await axios.post(`${BASE}products-api`, productJson,{
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
        const query = await axios.post(`${BASE}products-api`, productJson,{
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("Product success!")
        const data = query.data
        return data;
    }

    async deleteProduct(id){
        const query = await axios.delete(`${BASE}products-api/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("Delete success!")
        const data = query.data;
        return data;
    }

}export default ProductApi;

