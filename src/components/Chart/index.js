import axios from 'axios';

const apiHeader = "https://covid19.mathdro.id/api";
const dailyHeader = {
    method: 'GET',
    url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php',
    headers: {
      'x-rapidapi-key': 'f977c22156msh5553430e00d1b32p11e503jsn4918889ed38c',
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com'
    }
  };

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
        console.log("FROMAPI: ", response.data);
    } catch (error) {
        console.log(error);

    }
}

