import React, {Component} from 'react';
import PlayerCard from './components/PlayerCard';
import ProvideApiData from './components/ProvideApiData';
import lambdalogo from './lambdalogo.png';
import githublogo from './githublogo.png';
import ShowChart from './components/ShowChart';


class App extends Component {

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
            <ShowChart />
          </div>
        </div>
    );
  }
}

export default App;