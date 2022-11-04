import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Card, Grid, Typography } from '@mui/material';

export default function Season() {

    const navigate = useNavigate();

    const { seriesId } = useParams();
    const [data, setData] = useState([]);

    const style = {
        // bgcolor: 'background.paper',
        // border: '2px solid #000',
        p: 4,
    };

    useEffect(() => {
        const Seasons = async () => {
            const res = await fetch(`http://localhost:2022/season/series/${seriesId}`, {
                method: 'GET'
            })
            const seasons = await res.json();
            setData(seasons.data);
        }
        Seasons();
    }, [])

    return (
        <div>
            <Grid container spacing={2} sx={{ padding: '10px' }} >
                {


                    data.map((season) => {
                        return (
                            <Grid onClick={() => navigate(`/home/${seriesId}/${season._id}`)} item lg={3} key={season._id} >
                                <Card sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        {season.name}
                                    </Typography>
                                </Card>
                            </Grid>
                        );
                    })

                }
            </Grid>
        </div>
    )
}
