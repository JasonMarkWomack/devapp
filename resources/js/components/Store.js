import React from 'react';
import ReactDOM from 'react-dom';

function Store() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Store #1</div>

                        <div className="card-body">Atlanta, GA</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Store;

if (document.getElementById('store')) {
    ReactDOM.render(<Store />, document.getElementById('store'));
}
