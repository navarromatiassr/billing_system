import axios from 'axios';
const BASE = 'http://localhost:8080/api/'

class BillingApi {
    async getBillings(){
        const query = await axios.get(`${BASE}billings/all`);
        const data = query.data;
        return data;
    }

    async getBillingById(id){
        const query = await axios.get(`${BASE}billing/select/${id}`);
        const data = query.data;
        return data;
    }

    async getBillingByIdClient(id){
        const query = await axios.get(`${BASE}billing_client?billHeader.client.id=${id}`);
        const data = query.data;
        return data;
    }

    async createBilling(billing){
        const billingJson = JSON.stringify(billing);
        const query = await axios.post(`${BASE}billing`, billingJson,{
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = query.data;
        return data;
    }

    async deleteBilling(id){
        const query = await axios.put(`${BASE}billing/${id}`, {
           headers: {
               "Content-Type": "application/json",
           }
       });
       console.log("Delete success!")
       const data = query.data;
       return data;
    }
}
export default BillingApi;
