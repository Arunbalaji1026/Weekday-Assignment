import { apiHeaders } from "./apiHeaders";

export const getApiData = async () => {
    const requestOptions = {
        method: 'POST',
        headers: apiHeaders,
        body: JSON.stringify({
            limit: 10,
            offset: 0
        })
    };
    try {
        const response = await fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON",
            requestOptions
        );

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        return result; // Return the data
    } catch (error) {
        console.error(error);
        return null; // Return null if there's an error
    }
}