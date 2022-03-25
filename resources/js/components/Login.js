import React from 'react';
import ReactDOM from 'react-dom';

function Login() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">r fff</div>
                        <form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
                        <div className="card-body">I'm acomponent!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
