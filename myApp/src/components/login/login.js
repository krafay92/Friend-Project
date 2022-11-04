import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import "./login.css";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const login = () => {
        axios.post("http://localhost:2022/user/login", user)
            .then(res => {
                console.log(user);
                console.log(res);
                navigate('/home')
            })
    }

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }

    return (
        <div className="login">
            {/* {console.log("User", user)} */}
            <h1>Login</h1>

            <div className="login1">
                <input type="email" name="email" value={user.email} placeholder="Your email" onChange={ (e) => setUser({...user, email: e.target.value})} />
            </div>

            <div className="login1">
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ (e) => setUser({...user, password: e.target.value})} />
            </div>

            <div className="button" onClick={login}>Login</div>

        </div>
    )

}
export default Login;