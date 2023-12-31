import React, { Component } from 'react';
import "./Live.css";

class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team1: { name: 'E.Eagles', score: '8/0', overs: '(0.4)' },
      team2: { name: 'E.Titans', score: '0/0', overs: '(0)' },
      breakMessage: 'Live',
      newsMessage: 'E.Kings Get Tickets For Finals'
    };
  }

  componentDidMount() {
    // Simulate live updates with a timer
    this.updateInterval = setInterval(() => {
      // Update your state with new data here
      // For now, let's just increment the scores
      this.setState((prevState) => ({
        team1: { ...prevState.team1, score: '0/0' },
        team2: { ...prevState.team2, score: '0/0' }
      }));
    }, 2000); // Update every 5 seconds (adjust as needed)
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  render() {
    const { team1, team2, breakMessage, newsMessage } = this.state;

    return (
      <div className='Livesection'>
        <div className="wontoss">SEMI FINAL-2</div>

        <div className="teamlo">
          <div className="team10">
            <div className="teamname">{team1.name}</div>
            <div className="scorer">
              <div className="scorelive">{team1.score}</div>
              <div className="Over">{team1.overs}</div>
            </div>
          </div>

          <div className="team10">
            <div className="teamname">{team2.name}</div>
            <div className="scorer">
              <div className="score">{team2.score}</div>
              <div className="Over">{team2.overs}</div>
            </div>
          </div>

          <div className="overnews">{breakMessage}</div>
          <div className="overnewss">{newsMessage}</div>
        </div>
      </div>
    );
  }
}

export default Live;
