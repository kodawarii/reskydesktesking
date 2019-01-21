import React, { Component } from 'react';

// Components
import PlayerNumber from './Components/PlayerNumber';
import HoleNumber from './Components/HoleNumber';

// Stylesheets
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentComponent: 'playerNumber',
      playerNumber: '',
      holes: '',
      players: []
    }
  }

  /* Getting Number of Players */
  handleUpdatePlayerNumber(number){
    this.state.playerNumber = number;
    console.log("Number of Players: " + this.state.playerNumber);
  }

  handleGoToHoleNumber(){
    this.setState({currentComponent: 'holeNumber'});
  }

  /* Getting Number of Holes */
  handleUpdateHoleNumber(number){
    this.state.holes = number;
    console.log("Number of Holes: " + this.state.holes);
  }

  handleGoToPlayGameState(){
    this.setState({currentComponent: 'gameMode'})
  }

  render() {

    let toRender;

    if(this.state.currentComponent === 'playerNumber'){
      toRender = <PlayerNumber 
        numberOfPlayers={this.handleUpdatePlayerNumber.bind(this)}
        goingToNumberOfHoles={this.handleGoToHoleNumber.bind(this)}
        />;
    }
    else if(this.state.currentComponent === 'holeNumber'){
      toRender = <HoleNumber 
      numberOfHoles={this.handleUpdateHoleNumber.bind(this)}
      goingToPlayGameState={this.handleGoToPlayGameState.bind(this)}
      />;
    }
    else if(this.state.currentComponent === 'gameMode'){
      console.log('Rendering Game State');
    }

    return (
      <div className="App">
        <header className="App-header">
          {toRender}
        </header>
      </div>
     
    );
  }
}

export default App;
