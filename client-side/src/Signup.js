import { Link } from "react-router-dom";
import React, { Component } from 'react';

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      email:"",
      password:""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    const {username, email, password} = this.state;
    console.log(username, email, password);
    fetch("http://localhost:5000/register",{
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body: JSON.stringify({
        username,
        password,
        email
      })
    }).then((res)=>res.json())
      .then((data)=>{console.log("Data",data);})
  };
     render() {
      return(
        <div className="signUp-container">
            <div className="account section">
                <div className="container">
            <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="login-form border p-5">
                          <div className="text-center heading">
                          <h2 className="mb-2">Sign Up</h2>
                          <p className="lead">Already have an account? <Link to={{ pathname: "/login"}}>go to Login</Link></p>
                          </div>
                          <form action="#" onSubmit={this.onSubmit}>
                          <div className="form-group mb-4">
                              <label htmlFor="#">Enter Email Address</label>
                              <input onChange={(e) => this.setState({email: e.target.value})} type="email" className="form-control" placeholder="Enter Email Address"/>
                          </div>
                          <div className="form-group mb-4">
                              <label htmlFor="#">Enter username</label>
                              <input onChange={(e) => this.setState({username: e.target.value})} type="text" className="form-control" placeholder="Enter Password"/> 
                          </div>
                          <div className="form-group mb-4">
                          <Link className="float-right" to={{ pathname: "/forgot-password"}}>Forget password?</Link>
                              <label htmlFor="#">Enter Password</label>
                              <input onChange={(e) => this.setState({password: e.target.value})} type="password" className="form-control" placeholder="Enter Password"/> 
                          </div>
                          <button type="submit" className="btn btn-main mt-3 btn-block">Signup</button>
                          </form>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
          </div>
      )
     }
}


// function SignUp() {
//      // States for registration
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

//    // Handling the name change
//    const handleName = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//     console.log(e.target.value)
//   };

//     // Handling the email change
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//         setSubmitted(false);
//       };
    
//       // Handling the password change
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setSubmitted(false);
//   };
  
//   // Handling the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name === '' || email === '' || password === '') {
//       setError(true);
//     } else {
//       setSubmitted(true);
//       setError(false);
//     }
//   };

//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: submitted ? '' : 'none',
//         }}>
//         <h1>User {name} successfully registered!!</h1>
//       </div>
//     );
//   };
 
//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? '' : 'none',
//         }}>
//         <h1>Please enter all the fields</h1>
//       </div>
//     );
//   };
  
//     return (
//         <div className="signUp-container">
//             <div className="account section">
//                 <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-lg-6">
//                     <div className="login-form border p-5">
//                         <div className="text-center heading">
//                         <h2 className="mb-2">Sign Up</h2>
//                         <p className="lead">Already have an account? <Link to={{ pathname: "/login"}}>go to Login</Link></p>
//                         </div>
//                {/* Calling to the methods */}
//       <div className="messages">
//         {errorMessage()}
//         {successMessage()}
//       </div>
//                         <form action="#">
//                         <div className="form-group mb-4">
//                             <label htmlFor="#">Enter Email Address</label>
//                             <input onChange={handleEmail} value={email} type="email" className="form-control" placeholder="Enter Email Address"/>
//                         </div>
//                         <div className="form-group mb-4">
//                             <label htmlFor="#">Enter username</label>
//                             <input onChange={handleName} value={name} type="text" className="form-control" placeholder="Enter Password"/> 
//                         </div>
//                         <div className="form-group mb-4">
//                         <Link className="float-right" to={{ pathname: "/forgot-password"}}>Forget password?</Link>
//                             <label htmlFor="#">Enter Password</label>
//                             <input onChange={handlePassword} value={password} type="password" className="form-control" placeholder="Enter Password"/> 
//                         </div>
//                         <button onClick={handleSubmit} type="submit" className="btn btn-main mt-3 btn-block">Signup</button>
//                         </form>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default SignUp 