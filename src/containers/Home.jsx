import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material'
import Card from "../components/Card";
import { getApiData } from "../utils/api";


const Home = () => {
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getApiData();
            setJobListings(response);
        }

        fetchData()
    }, []);

    return (
        <Grid container spacing={3}>
            {jobListings?.jdList?.length > 0 && jobListings?.jdList?.map((jobDetails, index) =>
                <Grid item lg={4} md={6} xs={12}>
                    <Card key={index} jobData={jobDetails} />
                </Grid>
            )}
        </Grid>
    )
}

export default Home;