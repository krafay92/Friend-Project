import React from "react";
import axios  from "axios";
import "./homepage.css";

const Homepage = () => {

    // const[user]=useState([])
    const getall=()=>{
        
        axios.get("http://localhost:2022/stream/getall")
        .then(res=>{console.log(res)})
        .then(res=>{
            const User=res.data;
            this.setState({ User })
        })

    }     
    //    const list= user.map(user=>
    //         <li key={user.id}>{user.name}</li>)
   
    return (
        <>
        <div className="homepage">
            <h1> Hello Homepage</h1>
            <div className="button" onClick={getall}>Get All</div>

            <ul>
                {
                    this.state.User
                    .map(User=>
                       <li key={User.id}>{User.name}</li> 
                        
                        )
                }
            </ul>
        </div>
        
        </>   
    )

}
export default Homepage;
