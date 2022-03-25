import React from 'react';
import ReactDOM from 'react-dom';

// function Login() {
//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card">
//                         <div className="card-header">r fff</div>
//                         <form onsubmit="console.log('You clicked submit.'); return false">
//   <button type="submit">Submit</button>
// </form>
//                         <div className="card-body">I'm acomponent!</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;

// if (document.getElementById('login')) {
//     ReactDOM.render(<Login />, document.getElementById('login'));
// }
// 
class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    submitLogin(e) {}
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
  
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin
              .bind(this)}>Login</button>
          </div>
        </div>
      );
    }
  
  }

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
