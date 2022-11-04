import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, CardMedia, CardContent, CardActionArea, CardActions, Grid, Typography } from '@mui/material';

export default function Episodes() {
    const { seasonId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const Episodes = async () => {
            const res = await fetch(`http://localhost:2022/episode/season/${seasonId}`, {
                method: 'GET'
            })
            const episodes = await res.json();
            setData(episodes.data);
        }
        Episodes();
    }, [])

    return (
        <div>
            <Grid container spacing={2} sx={{ padding: '10px' }} >
                {
                    data.map((episode) => {
                        return (
                            <Grid item lg={3} key={episode._id} >
                                <Card sx={{ maxWidth: 345 }} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={episode.image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {episode.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {episode.description}
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
    )
}
