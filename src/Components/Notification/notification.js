import React from 'react'

class Notification {
    constructor() {
        this.state={
            "name":''
        }
    }
    render(){
    return(
            <div className="toast">
                <h3> {this.state.name }</h3>
                <div className="toast-header">
                    <div className="rounded mr-2" style="height: 16px;width: 16px;background-color: red;"></div>
                    <strong className="mr-auto">Success!</strong>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    Your operation is done.
                </div>
            </div>
        )
    }
}
export default Notification;