import React from 'react'
import './ErrorModel.css'

function ErrorModel({onError}) {

    const toggleError = () =>{
        onError();

    }

    return (
        <div className='main' >
            <div className="ui-card">
                <div className="card-header">
                    Warning
                </div>
                <div className="card-body">
                    <h5 className="card-title">Something is went wrong</h5>
                    <p className="card-text">Please enter valid inputs</p>
                    <button className="btn btn-primary" onClick={toggleError}>Okay</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorModel