import React from "react";
import ShowBillings from './Components/show-billings';

class Billing extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container">
                <ShowBillings/>
                <button type="button" className="btn btn-primary">Add billing</button>
            </div>
        )
    }
}
export default Billing;
