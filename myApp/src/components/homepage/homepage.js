import React, { useState, useEffect } from "react";
import axios  from "axios";
import "./homepage.css";
import { Card, CardActionArea, CardContent, CardActions, Typography, Button, Grid } from "@mui/material";

const Homepage = () => {

    const[data, setData]=useState([]);
    
    useEffect( () => {
        axios.get("http://localhost:2022/series/")
        .then(res=>{
            // console.log(res);
            setData(res.data.data);
        })
        console.log(data);
    }, [])

    console.log(data);
   
    return (
        <>
        <div className="homepage">
            <h1> Hello Homepage</h1>
            {/* <div className="button" onClick={getall}>Get All</div> */}

            {/* <ul>
                {
                    this.state.User
                    .map(User=>
                       <li key={User.id}>{User.name}</li> 
                        
                        )
                }
            </ul> */}
            <Grid container spacing={2} sx={{ padding: '10px' }} >
                {

                    data.length !== 0 ?
                        data.map((series) => {
                            return (
                                <Grid item lg={3} key={series._id} >
                                    <Card sx={{ maxWidth: 345 }} >
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {series.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {series.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Watch
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        })
                        :
                        null
                }

            </Grid>
        </div>
        
        </>   
    )

}
export default Homepage;
