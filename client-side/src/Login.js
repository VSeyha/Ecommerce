import { Link } from "react-router-dom";
import React, {Component} from "react";
export default class Login extends Component{
    constructor(props){
      super(props);
      this.state={
        username: "",
        password: "",
      }
      this.onLogin = this.onLogin.bind(this);
    }
    onLogin(e){
        e.preventDefault();
        const {username, password} = this.state;
        console.log(username,password);
        fetch("http://localhost:5000/login",{
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
            })
          }).then((res)=>res.json())
            .then((data)=>{
                console.log("Data",data);
                if(data.status === "OK"){
                   alert("Login Success");
                   window.localStorage.setItem("token", data.data);
                   window.location.href = "/user ";
                }
            });
    }
    render(){
        return (
            <div className="login-container">
                <div className="account section">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                        <div className="login-form border p-5">
                            <div className="text-center heading">
                            <h2 className="mb-2">Login</h2>
                            <p className="lead">Don't have an account? <Link to={{ pathname: "/signup"}}>Create a free account</Link></p>
                            </div>
                
                            <form action="#" onSubmit={this.onLogin}>
                            <div className="form-group mb-4">
                                <label htmlFor="#">Enter username</label>
                                <input onChange={(e) => this.setState({username: e.target.value})} type="text" className="form-control" placeholder="Enter Username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="#">Enter Password</label>
                                <Link className="float-right" to={{ pathname: "/forgot-password"}}>Forget password?</Link>
                                <input onChange={(e) => this.setState({password: e.target.value})} type="password" className="form-control" placeholder="Enter Password" /> 
                            </div>
                
                            <button type="submit" className="btn btn-main mt-3 btn-block">Login</button>
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
// function Login() {
//     return (
//         <div className="login-container">
//             <div className="account section">
//                 <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-lg-6">
//                     <div className="login-form border p-5">
//                         <div className="text-center heading">
//                         <h2 className="mb-2">Login</h2>
//                         <p className="lead">Don't have an account? <Link to={{ pathname: "/signup"}}>Create a free account</Link></p>
//                         </div>
            
//                         <form action="#">
//                         <div className="form-group mb-4">
//                             <label htmlFor="#">Enter username</label>
//                             <input type="text" className="form-control" placeholder="Enter Username" />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="#">Enter Password</label>
//                             <Link className="float-right" to={{ pathname: "/forgot-password"}}>Forget password?</Link>
//                             <input type="text" className="form-control" placeholder="Enter Password" /> 
//                         </div>
            
//                         <button type="submit" className="btn btn-main mt-3 btn-block">Login</button>
//                         </form>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Login