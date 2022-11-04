import React,{useState} from "react";
import axios from "axios";
import "./register.css";


const Register=()=>{
   
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })

    const register=()=>{
        const{name,email,password}=user;
        if(name && email && password){
            alert("posted")
            axios.post("http://localhost:2022/user/register",user)
            .then( res =>console.log(res))
        }
        else{
            alert("invalid")
        }
       
    }
    const handleChange=e=>{
        const {name,value}=e.target
       setUser({
        ...user,
        [name]:value
       })
        
    }
    return(
        <div className="Register">
            {console.log("User",user)}
            <h1>Register</h1>
            <div className="Register1">
                    <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                </div>
              
                <div className="Register1">
                    <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                </div>
               
                <div className="Register1">
                    <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                </div>
            
            <div className="button" onClick={register}>Register</div>
            
            
        </div>
    )

}
export default Register;