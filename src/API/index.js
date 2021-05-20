import axios from 'axios';

const apiHeader = "https://covid19.mathdro.id/api";
const dailyHeader = "https://covid19.mathdro.id/api/daily";

export const fetchData = async () => {
    try{
        const response = await axios.get(apiHeader); 
        // console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try{
        const response = await axios.get(dailyHeader);
        console.log("FROMAPI: ", response);
    } catch (error) {
        console.log(error);

    }
}

