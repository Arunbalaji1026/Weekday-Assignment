import React, { useState, useEffect, useReducer } from "react";
import { CircularProgress, Grid, Box, Backdrop } from '@mui/material'
import Card from "../components/Card";
import { getApiData } from "../utils/api";
import InfiniteScroll from "../components/InfiniteScroll";
import Filter from "../components/Filter";
import { multiSelectReducer } from "../reducers/filterReducers";
import { filterByCriteria } from "../utils/utilCommonFunc";


const Home = () => {
    const [jobListings, setJobListings] = useState([]);
    const [filteredJobListings, setFilteredJobListings] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const [selectedValues, dispatch] = useReducer(multiSelectReducer, {});

    useEffect(() => {
        if (selectedValues && Object.keys(selectedValues).length > 0) {
            const newFilteredLists = filterByCriteria(selectedValues, jobListings); // filter applied, creates new List
            setFilteredJobListings(newFilteredLists);
        } else {
            setFilteredJobListings(jobListings);  // No filters applied, use the original list
        }
    }, [selectedValues, jobListings]);

    const loadData = async () => {
        if (loading) return;
        setLoading(true);
        const result = await getApiData(offset);
        if (result) {
            setJobListings(prevData => offset !== 0 ? [...prevData, ...result?.jdList] : result?.jdList); // Avoid unnecessary data accumulation
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
            <Box sx={{ marginBottom: '30px' }}>
                <Filter dispatch={dispatch} />
            </Box>
            <Grid container spacing={3} justifyContent="flex-start">
                {(filteredJobListings.length > 0 ? filteredJobListings : jobListings)?.map((jobDetails, index) =>
                    <Grid item lg={4} md={6} xs={12}>
                        <Card key={index} jobData={jobDetails} />
                    </Grid>
                )}
                {loading && <Backdrop
                    sx={{ color: '#55efc4', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}
                    onClick={() => setLoading(false)}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>}
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