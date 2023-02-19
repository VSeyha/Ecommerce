import React, {Component} from "react";

export default class userDetail extends Component{
   constructor(props){
    super(props);
    this.state = {userData: ""}
   }
   componentDidMount(){
    fetch("http://localhost:5000/register",{
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type":"application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token"),
        })
      }).then((res)=>res.json())
        .then((data)=>{console.log("Data",data);})
   }

   render(){
    return(
        <div>
            Name:<h1>{this.userData.username}</h1>
            {/* Email:<h1>{this.userData.}</h1> */}
        </div>
    );
   }
}