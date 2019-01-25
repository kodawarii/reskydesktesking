import React, {Component} from 'react';

// Components
import SingleHoleInfo from './SingleHoleInfo';

class PlayGameState extends Component{

    constructor(){
        super();

        this.state = {
            numberOfHoles: '',
            holesData: [],
            holeToDisplay: 0,

            players: [],
            playersData: [],
            initialRender: true
        }
    }

    handleUpdateParNumber(direction){
        let currentHoleToDisplay = this.state.holeToDisplay;
        let currentHoleParNumber = this.state.holesData[currentHoleToDisplay].par;

        console.log("DEBUG: CurrentHoleToDisplay: " + currentHoleToDisplay);
        console.log("DEBUG: CurrentHoleParNumber: " + currentHoleParNumber);

        for(var i in this.state.holesData){ 
            if(this.state.holesData[i].holeNumber === currentHoleToDisplay){
                if(direction === 'minus'){
                    this.state.holesData[i].par = currentHoleParNumber - 1;
                }
                else if(direction === 'add'){
                    this.state.holesData[i].par = currentHoleParNumber + 1;
                }
            }
        }

        console.log("Current Hole to Display: " + this.state.holeToDisplay);
        console.log("Got told to display: " + this.state.holesData[currentHoleToDisplay].holeNumber);
        console.log("Updated Par: " + this.state.holesData[currentHoleToDisplay].par);

        this.forceUpdate();
    }

    handleWhichHoleToShow(direction){
        let currentHoleToDisplay = this.state.holeToDisplay;
        if(direction === 'prev'){
            this.state.holeToDisplay = currentHoleToDisplay - 1;
        }
        else if(direction === 'next'){
            this.state.holeToDisplay = currentHoleToDisplay + 1;
        }

        this.forceUpdate();
    }

    setHoleData(){
        for(var i = 0; i < parseInt(this.state.numberOfHoles); i++){
            this.state.holesData.push({
                holeNumber: i,
                par: 3
            });
        }
    }

    setPlayerData(){
        for(var player in this.state.players){
            this.state.playersData.push({
                name: this.state.players[player],
                score: 0,
            });
        }
    }

    updatePlayerData(player, isGoingDown){
        for(var i in this.state.playersData){ // some fucking reason, this is index, NOT the player data
            let singlePlayer = this.state.playersData[i];
            if(singlePlayer.name === player){
                let currentScore = this.state.playersData[i].score
                if(isGoingDown){
                    this.state.playersData[i].score = currentScore - 1;
                }
                else{
                    this.state.playersData[i].score = currentScore + 1;
                } 
            }
        }

        // some debugging to see if score actually gets updated, need to somehow show this update on webpage dynamically
        for(var i in this.state.playersData){
            let playerData = this.state.playersData[i]
            console.log("Name: " + playerData.name + " Score: " + playerData.score);
        }
    }

    render(){

        if(this.state.initialRender){
            this.state.numberOfHoles = this.props.numberOfHoles;
            this.state.players = this.props.players;
            this.setPlayerData();
            this.setHoleData();

            this.state.initialRender = false;
        }

        let toRender;

        let arrayOfSingleHoleInfoComponents = this.state.holesData.map( currentHole => {
            return (
                <div>
                    <SingleHoleInfo
                    holeNumber={currentHole.holeNumber}
                    listOfPlayersData={this.state.playersData}
                    updatePlayerData={this.updatePlayerData.bind(this)}
                    updateHoleNumber={this.handleWhichHoleToShow.bind(this)}
                    updateParNumber={this.handleUpdateParNumber.bind(this)}
                    par={currentHole.par}
                    />
                </div>
            );
        });


        /*
        // rendering just one sample of singleHoleInfo whilst implementing design of singleHoleInfo
        // @To-Do: need to implement switch-case where which singleHoleInfo to show
        let toRender = <SingleHoleInfo
        listOfPlayersData={this.state.playersData}
        updatePlayerData={this.updatePlayerData.bind(this)}

        />
        */

        // Which Hole to show
        for(var i in arrayOfSingleHoleInfoComponents){
            if(parseInt(i) === this.state.holeToDisplay){
                toRender = arrayOfSingleHoleInfoComponents[i];
            }
        }

        return(
            <div>
                {toRender} 
            </div>
        );
    }
}

export default PlayGameState;