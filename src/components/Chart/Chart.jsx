import React, { useState, useEffect } from 'react'
import { fetchDailyData } from './index'; //no need to specify index.js files, it will look for it
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';

import styles from './Chart.css';

const Chart = ({ confirmed, recovered, deaths }) => {

    const [chartData, setChartData] = useState({});
    console.log("Confirmed: ", confirmed);
    console.log("Recovered:", recovered);
    console.log("Deaths: ", deaths);
  

    const chart = () => {
        setChartData({
            labels: ['Infiziert', 'Genesen', 'Todesfälle'],
            datasets: [
                {
                    label: 'CoVid 19 Global',
                    data: [confirmed, recovered, deaths],
                    backgroundColor: [
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)'

                    ],
                    borderWidth: 4
                },
            ]
        })
    }

    useEffect(() => {
        chart();
    }, [])

    return (
        <div className="chart">
            <Bar className="chart__bar" data={chartData} />    
        </div>
    )
}

export default Chart
