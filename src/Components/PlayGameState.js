import React, {Component} from 'react';

// Components
import SingleHoleInfo from './SingleHoleInfo';

class PlayGameState extends Component{

    constructor(){
        super();

        this.state = {
            numberOfHoles: '',
            players: [],
            playersData: []
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

        this.state.numberOfHoles = this.props.numberOfHoles;
        this.state.players = this.props.players;
        this.setPlayerData();

        // rendering just one sample of singleHoleInfo whilst implementing design of singleHoleInfo
        // @To-Do: need to implement switch-case where which singleHoleInfo to show
        let toRender = <SingleHoleInfo
        listOfPlayersData={this.state.playersData}
        updatePlayerData={this.updatePlayerData.bind(this)}

        />

        return(
            <div>
                {toRender} 
            </div>
        );
    }
}

export default PlayGameState;