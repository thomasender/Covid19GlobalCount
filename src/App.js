import { useState, useEffect } from 'react';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Header, Chart } from './components/';
import styles from './App.module.css';

import { fetchData } from './API'; //no need to specify index.js files, it will look for it

function App() {
  const [data, setData] = useState({});
  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [lastUpdate, setLastUpdate] = useState("");

  

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
  
      setData(data); 
      setConfirmed(data.data.confirmed.value);
      setRecovered(data.data.recovered.value);
      setDeaths(data.data.deaths.value);
      setLastUpdate(data.data.lastUpdate);
    }

    getData();

 
  }, []);

  if(!confirmed){
    return 'Loading...'
  }

  return (
    <div className={styles.container}>
      <Header />
      <Cards confirmed={confirmed} recovered={recovered} deaths={deaths} lastUpdate={lastUpdate}/>
      <Chart confirmed={confirmed} recovered={recovered} deaths={deaths}/>
    </div>
  );
}

export default App;
