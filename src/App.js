import React, { Component } from 'react';

// Components
import PlayerNumber from './Components/PlayerNumber';
import HoleNumber from './Components/HoleNumber';
import EnterNames from './Components/EnterNames';
import PlayGameState from './Components/PlayGameState';
import ExcessPlayerPage from './Components/ExcessPlayerPage';
import OptionSelectionBanner from './Components/OptionSelectionBanner';
import AreYouSure from './Components/AreYouSure';
import ResultsPage from './Components/ResultsPage';

// Stylesheets
import './App.css';

const initialState = {
  currentComponent: 'playerNumberState',
  playerNumber: ' ', // if '' empty string, then props assignment doesn't seem to work
  holes: ' ',
  players: [],

  isFinalHole: false,

  stack: [],

  playerData:[]
};

class App extends Component {

  constructor(){
    super();
    this.state = initialState;
  }

  /* Getting Number of Players */
  handleUpdatePlayerNumber(number){
    this.setState({playerNumber: number});
    console.log("Number of Players: " + this.state.playerNumber);
  }

  handleGoToHoleNumber(){
    this.setState({currentComponent: 'holeNumberState'});
  }

  handleGoToPlayerNumber(){
    this.setState({currentComponent: 'playerNumberState'});
  }

  /* Getting Number of Holes */
  handleUpdateHoleNumber(number){
    this.setState({holes: number});
    console.log("Number of Holes: " + this.state.holes);
  }

  handleGoToEnterNameState(){
    this.setState({currentComponent: 'EnterNameState'})
  }

  handleGoToPlayGameState(){
    this.setState({currentComponent: 'playGameState'})
  }

  handleGoToExcessPlayers(){
    this.setState({currentComponent: 'excessPlayers'});
  }

  handleSetListOfPlayers(mylist){
    this.setState({players: mylist});
    console.log("List of Players: " + this.state.players);
  }

  handleGoToAreYouSurePage(){
    this.setState({currentComponent: 'areYouSure'});
  }

  handleGoToReturnToPlayState(){
    this.setState({currentComponent: 'resumePlay'});
  }

  handleResetGame(){
    this.setState({initialState});
    this.setState({currentComponent: 'playerNumberState'});
  }

  handleTriggerFinalHole(isFinalHole){
    if(isFinalHole){
      this.setState({isFinalHole: true});
    }
    else{
      this.setState({isFinalHole: false});
    }
  }

  handleGotToResultsPage(){
    this.setState({currentComponent: 'resultsPage'});
  }

  handleGettingPlayerData(data){
    this.setState({playerData: data});
  }

  render() {

    let toRender;
    let showBanner;
    let finnishAndResults;

    if(this.state.currentComponent === 'playerNumberState'){
        toRender = <PlayerNumber 
        numberOfPlayers={this.handleUpdatePlayerNumber.bind(this)}
        goingToNumberOfHoles={this.handleGoToHoleNumber.bind(this)}
        goingToExcessPlayers={this.handleGoToExcessPlayers.bind(this)}
        />;

        showBanner = <OptionSelectionBanner
        numberOfHoles = {this.state.holes}
        numberOfPlayers = {this.state.playerNumber}
        currentComponent = {this.state.currentComponent}
        goingToNumberOfHoles = {this.handleGoToHoleNumber.bind(this)}
        goingToNumberOfPlayers = {this.handleGoToPlayerNumber.bind(this)}
        />;
    }
    else if(this.state.currentComponent === 'holeNumberState'){
      toRender = <HoleNumber 
      numberOfHoles={this.handleUpdateHoleNumber.bind(this)}
      goingToEnterNameState={this.handleGoToEnterNameState.bind(this)}
      />;

      showBanner = <OptionSelectionBanner
      numberOfHoles = '-'
      numberOfPlayers = {this.state.playerNumber}
      currentComponent = {this.state.currentComponent}
      goingToNumberOfHoles={this.handleGoToHoleNumber.bind(this)}
      goingToNumberOfPlayers={this.handleGoToPlayerNumber.bind(this)}
      />;
    }
    else if(this.state.currentComponent === 'EnterNameState'){
      toRender = <EnterNames 
      setListOfPlayers={this.handleSetListOfPlayers.bind(this)}
      numberOfPlayers={this.state.playerNumber}
      goingToPlayGameState={this.handleGoToPlayGameState.bind(this)}
      />;

      showBanner = <OptionSelectionBanner
      numberOfHoles = {this.state.holes}
      numberOfPlayers = {this.state.playerNumber}
      currentComponent = {this.state.currentComponent}
      goingToNumberOfHoles = {this.handleGoToHoleNumber.bind(this)}
      goingToNumberOfPlayers = {this.handleGoToPlayerNumber.bind(this)}
      />;
    }
    else if(this.state.currentComponent === 'playGameState'){
      toRender = <PlayGameState
      numberOfHoles = {this.state.holes}
      players = {this.state.players}
      handleTriggerFinalHole={this.handleTriggerFinalHole.bind(this)}
      sendPlayerData={this.handleGettingPlayerData.bind(this)}
      />;

      showBanner = <OptionSelectionBanner
      numberOfHoles = {this.state.holes}
      numberOfPlayers = {this.state.playerNumber}
      currentComponent = {this.state.currentComponent}
      goingToNumberOfHoles = {this.handleGoToHoleNumber.bind(this)}
      goingToNumberOfPlayers = {this.handleGoToPlayerNumber.bind(this)}
      goingToAreYouSurePage = {this.handleGoToAreYouSurePage.bind(this)}
      />;

      this.state.stack.push(toRender);
      this.state.stack.push(showBanner);
    }
    else if(this.state.currentComponent === 'excessPlayers'){
      toRender = <ExcessPlayerPage
      />;
    }
    else if(this.state.currentComponent === 'areYouSure'){
      toRender = <AreYouSure
      goingToResetGame = {this.handleResetGame.bind(this)}
      goingToReturnToPlayGameState = {this.handleGoToReturnToPlayState.bind(this)}
      />;
    }
    else if(this.state.currentComponent === 'resumePlay'){
      showBanner = this.state.stack[1];
      toRender = this.state.stack[0]; 
    }
    else if(this.state.currentComponent === 'resultsPage'){
      toRender = <ResultsPage
      data={this.state.playerData}
      holes={this.state.holes}
      />
    }
    else{
      alert('Extremely Fatal Error Occured - There was no page to load');
    }

    // If we reach final Hole, then give user option to exit game and show overall results
    if(this.state.isFinalHole && this.state.currentComponent === 'playGameState'){
      finnishAndResults = <span className="resultsButton" onClick={this.handleGotToResultsPage.bind(this)}>Finnish and Display Results</span>;
    }
    else{
      finnishAndResults = '';
    }

    return (
      <div className="App">
        <header className="App-header">
          <link href="https://fonts.googleapis.com/css?family=Gruppo" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Harmattan" rel="stylesheet"/>

          <div className="banner">
            {showBanner}
          </div>

          {toRender}

          <br/>

          {finnishAndResults}
        </header>

        <br/> <br/>
        <footer> Created By Paul Yoon (kodawarii/ayamachi, S'Eunbal'K_DU`Development 2019©) </footer>
      </div>
    );
  }
}

export default App;
