import React, { Component } from 'react';

// Components
import PlayerNumber from './Components/PlayerNumber';
import HoleNumber from './Components/HoleNumber';
import EnterNames from './Components/EnterNames';
import PlayGameState from './Components/PlayGameState';

// Stylesheets
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentComponent: 'playerNumberState',
      playerNumber: ' ', // if '' empty string, then props assignment doesn't seem to work
      holes: ' ',
      players: []
    }
  }

  /* Getting Number of Players */
  handleUpdatePlayerNumber(number){
    this.state.playerNumber = number;
    console.log("Number of Players: " + this.state.playerNumber);
  }

  handleGoToHoleNumber(){
    this.setState({currentComponent: 'holeNumberState'});
  }

  /* Getting Number of Holes */
  handleUpdateHoleNumber(number){
    this.state.holes = number;
    console.log("Number of Holes: " + this.state.holes);
  }

  handleGoToEnterNameState(){
    this.setState({currentComponent: 'EnterNameState'})
  }

  handleGoToPlayGameState(){
    this.setState({currentComponent: 'playGameState'})
  }

  handleSetListOfPlayers(mylist){
    this.state.players = mylist;
    console.log("List of Players: " + this.state.players);
  }

  render() {

    let toRender;

    if(this.state.currentComponent === 'playerNumberState'){
      toRender = <PlayerNumber 
        numberOfPlayers={this.handleUpdatePlayerNumber.bind(this)}
        goingToNumberOfHoles={this.handleGoToHoleNumber.bind(this)}
        />;
    }
    else if(this.state.currentComponent === 'holeNumberState'){
      toRender = <HoleNumber 
      numberOfHoles={this.handleUpdateHoleNumber.bind(this)}
      goingToEnterNameState={this.handleGoToEnterNameState.bind(this)}
      />;
    }
    else if(this.state.currentComponent === 'EnterNameState'){
      toRender = <EnterNames 
      setListOfPlayers={this.handleSetListOfPlayers.bind(this)}
      numberOfPlayers={this.state.playerNumber}
      goingToPlayGameState={this.handleGoToPlayGameState.bind(this)}
      />
    }
    else if(this.state.currentComponent === 'playGameState'){
      //console.log('Rendering Game State');
      toRender = <PlayGameState
      numberOfHoles = {this.state.holes}
      players = {this.state.players}
      />;
    }
    else{
      alert('Extremely Fatal Error Occured - no page to load');
    }

    return (
      <div className="App">
        <header className="App-header">
          <link href="https://fonts.googleapis.com/css?family=Gruppo" rel="stylesheet"/>
          {toRender}
        </header>
        <footer> Created By Paul Yoon (kodawarii/ayamachi, SK_DUDevelopment 2019©) </footer>
      </div>
     
    );
  }
}

export default App;
