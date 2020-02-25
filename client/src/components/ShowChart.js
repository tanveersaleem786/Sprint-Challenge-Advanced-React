import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

function ShowChart() {
  
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:6000/api/players')
    .then( response => {
      setPlayers(response.data);
    })
    .catch( err => {
      console.log("Error:", err);
    });
  }, []);

 
  let countryCounts = {};

  if(players.length > 0 )
  {
    players.forEach(player => {countryCounts[player.country] = (countryCounts[player.country] || 0)+1; });
  }

  const data = {
      labels: Object.keys(countryCounts),
      datasets: [
        {
          label: 'Total Players',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'blue',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'red',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: Object.values(countryCounts)
        }
      ]
    };

    return (
      <Bar data={data} />
    )
	
}

export default ShowChart;