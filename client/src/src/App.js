import React, {Component} from 'react';
import PlayerCard from './components/PlayerCard';
import ProvideApiData from './components/ProvideApiData';
import lambdalogo from './lambdalogo.png';
import githublogo from './githublogo.png';

//import {Bar} from 'react-chartjs-2';



class App extends Component {

  constructor() {
    super();

    this.state = {
      players: []
    };
  }

  // getPlayersInfo = () => {
  //   axios.get('http://localhost:5000/api/players')
  //   .then( response => {
  //     this.setState({
  //       players: response.data
  //     });

  //     this.barGraph(response.data);
  //     //console.log(this.state.players[0]);
  //   })
  //   .catch( err => {
  //     console.log("Error:", err);
  //   });
  // }

  // barGraph = (players) => {
    
  //   let countryCounts = {};

  //   if(players.length > 0 )
  //   {
  //     players.forEach(player => {countryCounts[player.country] = (countryCounts[player.country] || 0)+1; });

  //     console.log(Object.values(countryCounts))
  //   }

  //   const data = {
  //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //     datasets: [
  //       {
  //         label: 'My First dataset',
  //         fill: false,
  //         lineTension: 0.1,
  //         backgroundColor: 'rgba(75,192,192,0.4)',
  //         borderColor: 'rgba(75,192,192,1)',
  //         borderCapStyle: 'butt',
  //         borderDash: [],
  //         borderDashOffset: 0.0,
  //         borderJoinStyle: 'miter',
  //         pointBorderColor: 'rgba(75,192,192,1)',
  //         pointBackgroundColor: '#fff',
  //         pointBorderWidth: 1,
  //         pointHoverRadius: 5,
  //         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  //         pointHoverBorderColor: 'rgba(220,220,220,1)',
  //         pointHoverBorderWidth: 2,
  //         pointRadius: 1,
  //         pointHitRadius: 10,
  //         data: [65, 59, 80, 81, 56, 55, 40]
  //       }
  //     ]
  //   };

  //   return (
  //     <Bar data={data} />
  //   )
  // }

  componentDidMount() {

    //this.getPlayersInfo();
    
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={lambdalogo} alt="Lambda Logo" />
          <p>❤️'s</p>
          <img src={githublogo} alt="GitHub Logo" />
        </div>
        <div className="cards">
        <ProvideApiData>
          {({ data }) => {
            let newPlayer = data.map((player, index) => {
              return (<PlayerCard player={player} key={index} />) 
            })
           return newPlayer;
          }
          }
          </ProvideApiData>
          
        </div>
        
      </div>
    );
  }
}

export default App;