import React, { useState, useEffect } from "react";
import axios from "axios";
import "./homepage.css";
import { Card, CardActionArea, CardContent, CardActions, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:2022/series/")
            .then(res => {
                setData(res.data.data);
            })
    }, [])

    return (
        <>
            <div className="homepage">
                <Button onClick={ () => navigate('/')}>Logout</Button>
                <Grid container spacing={2} sx={{ padding: '10px' }} >
                    {
                        data.map((series) => {
                            return (
                                <Grid onClick={ () => navigate(`/home/${series._id}`)} item lg={3} key={series._id} >
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
                    }

                </Grid>
            </div>

        </>
    )

}
export default Homepage;
