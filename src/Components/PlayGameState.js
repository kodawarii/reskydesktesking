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

        //console.log("DEBUG: CurrentHoleToDisplay: " + (currentHoleToDisplay + 1));
        //console.log("DEBUG: CurrentHoleParNumber: " + currentHoleParNumber);

        for(var i in this.state.holesData){ 
            if(this.state.holesData[i].holeNumber === currentHoleToDisplay){
                if(direction === 'minus'){
                    if(currentHoleParNumber > 0){
                        this.state.holesData[i].par = currentHoleParNumber - 1;
                    }
                    else{
                        // Disable '-' Button
                    }
                }
                else if(direction === 'add'){
                    this.state.holesData[i].par = currentHoleParNumber + 1;
                }
            }
        }

        //console.log("Current Hole to Display: " + (this.state.holeToDisplay + 1));
        //console.log("Got told to display: " + (this.state.holesData[currentHoleToDisplay].holeNumber + 1));
        //console.log("Updated Par: " + this.state.holesData[currentHoleToDisplay].par);

        this.forceUpdate();
    }

    handleUpdateWhichHoleToShow(direction){
        let currentHoleToDisplay = this.state.holeToDisplay;
        if(direction === 'prev'){
            if(this.state.holeToDisplay > 0){
                this.state.holeToDisplay = currentHoleToDisplay - 1;
            }
            else{
                // Disable '-' button
            }
        }
        else if(direction === 'next'){
            if(this.state.holeToDisplay < parseInt(this.state.numberOfHoles - 1)){
                this.state.holeToDisplay = currentHoleToDisplay + 1;
            }
            else{
                // Disable '+' button
            }
        }

        this.forceUpdate();
    }

    setHoleData(){
        for(var i = 0; i < parseInt(this.state.numberOfHoles); i++){
            this.state.holesData.push({
                holeNumber: i,
                par: 3,
            });
        }
    }

    setPlayerData(){
        for(var player in this.state.players){
            this.state.playersData.push({
                name: this.state.players[player],
                score: 0,
                holeData: []
            });
        }

        for(var u in this.state.players){
            for(var i = 0; i < this.state.numberOfHoles; i++){
                this.state.playersData[u].holeData.push(0);
            }

            //console.log("Player Hole Data | Name: " + this.state.playersData[u].name + " HoleData: " + this.state.playersData[u].holeData);
        }
    }

    updatePlayerData(player, isGoingDown){
        for(var i in this.state.playersData){
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
    }

    updatePlayerDataForHole(player, isGoingDown){
        for(var i in this.state.playersData){ // finding right player
            let singlePlayer = this.state.playersData[i]
            let currentHole = this.state.holeToDisplay;

            if(singlePlayer.name === player){// if we found correct player
                let currentScoreForThatHole = singlePlayer.holeData[currentHole];

                if(isGoingDown){
                    this.state.playersData[i].holeData[currentHole] = currentScoreForThatHole - 1;
                }
                else{
                    this.state.playersData[i].holeData[currentHole] = currentScoreForThatHole + 1;
                }
            }
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
                    updatePlayerDataForHole={this.updatePlayerDataForHole.bind(this)}
                    updateHoleNumber={this.handleUpdateWhichHoleToShow.bind(this)} 
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