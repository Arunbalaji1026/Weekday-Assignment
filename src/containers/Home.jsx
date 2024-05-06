import React from "react";
import { Grid } from '@mui/material'
import Card from "../components/Card";

const Home = () => {
    return (
        <Grid container spacing={2}>
            <Grid item lg={12} className="card-container">
                <Card />
                <Card />
                <Card />
                <Card />
            </Grid>

        </Grid>
    )
}

export default Home;