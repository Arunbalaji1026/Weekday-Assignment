import React, { useState, useEffect } from "react";
import { CircularProgress, Grid, Box } from '@mui/material'
import Card from "../components/Card";
import { getApiData } from "../utils/api";
import InfiniteScroll from "../components/InfiniteScroll";
import Filter from "../components/Filter";


const Home = () => {
    const [jobListings, setJobListings] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loadData = async () => {
        if (loading) return;
        setLoading(true);
        const result = await getApiData(offset);
        if (result) {
            setJobListings(prevData => offset !== 0 ? [...prevData, ...result?.jdList] : result?.jdList);
            setOffset(prevOffset => prevOffset + result?.jdList?.length);
            setHasMore(result?.jdList?.length > 0);
        } else {
            setHasMore(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <Box sx={{marginBottom: 10}}>
                <Filter />
            </Box>
            <Grid container spacing={3} justifyContent="flex-start">
                {jobListings && jobListings?.length > 0 && jobListings?.map((jobDetails, index) =>
                    <Grid item lg={4} md={6} xs={12}>
                        <Card key={index} jobData={jobDetails} />
                    </Grid>
                )}
                {loading && <div className="circular-loader">{<CircularProgress />}</div>}
            </Grid>
            <InfiniteScroll
                loadMore={loadData}
                hasMore={hasMore}
                loading={loading}
            />
        </>
    )
}

export default Home;