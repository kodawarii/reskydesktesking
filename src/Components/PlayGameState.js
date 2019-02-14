import React, {Component} from 'react';

// Components
import SingleHoleInfo from './SingleHoleInfo';

const initialState = {
    numberOfHoles: '',
    holesData: [],
    holeToDisplay: 0,

    players: [],
    playersData: [],
    initialRender: true,

    latestHole: 1    
};

class PlayGameState extends Component{

    constructor(){
        super();

        this.state = initialState;
    }

    handleUpdateParNumber(direction){
        let currentHoleToDisplay = this.state.holeToDisplay;
        let currentHoleParNumber = this.state.holesData[currentHoleToDisplay].par;

        //console.log("DEBUG: CurrentHoleToDisplay: " + (currentHoleToDisplay + 1));
        //console.log("DEBUG: CurrentHoleParNumber: " + currentHoleParNumber);

        for(var i in this.state.holesData){ 
            if(this.state.holesData[i].holeNumber === currentHoleToDisplay){
                if(direction === 'minus'){
                    if(currentHoleParNumber > 1){
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

        /* Need to update each Player's PAR-over score if we update PAR data for that hole */
        for(var player in this.state.playersData){
            let currentScore = this.state.playersData[player].totalScore;
            let currentRawScore = this.state.playersData[player].parScore;

            if(direction === 'minus'){
                this.state.playersData[player].parScore = currentRawScore + 1;
            }
            else{
                this.state.playersData[player].parScore = currentRawScore - 1;
            }
        }

        this.props.handleUpdateHolesData(this.state.holesData);

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

        /* Handling Updating Latest Hole */
        if(this.state.holeToDisplay >= this.state.latestHole){
            this.state.latestHole = this.state.holeToDisplay + 1; // Using this.setState() doesn't update instantly
        }

        /* Handling to show exit to results */
        if(this.state.holeToDisplay === parseInt(this.state.numberOfHoles) - 1){
            this.props.handleTriggerFinalHole(true);
            this.props.sendPlayerData(this.state.playersData);
        }

        this.forceUpdate();
    }

    changeWhichHoleToShow(hole){
        this.state.holeToDisplay = parseInt(hole - 1);
        
        /* Handling Updating Latest Hole */
        if(this.state.holeToDisplay >= this.state.latestHole){
            this.state.latestHole = this.state.holeToDisplay + 1; // Using this.setState() doesn't update instantly
        }

        this.forceUpdate();
    }

    setHoleData(){
        for(var i = 0; i < parseInt(this.state.numberOfHoles); i++){
            this.state.holesData.push({
                holeNumber: i,
                par: 3,
                status: false,
            });
        }

        this.props.handleSetHoleData(this.state.holesData);
    }

    setPlayerData(){
        let tempTotalScore = 3 * parseInt(this.state.numberOfHoles);
        for(var player in this.state.players){
            this.state.playersData.push({
                name: this.state.players[player],
                parScore: 0, // keeps track of PAR-over-scores
                totalScore: tempTotalScore, // keeps track of Total-scores
                rawHoleData: [],
                holeData: [],
            });
        }

        for(var u in this.state.players){
            for(var i = 0; i < this.state.numberOfHoles; i++){
                this.state.playersData[u].holeData.push(3);
                this.state.playersData[u].rawHoleData.push(0);
            }

            //console.log("Player Hole Data | Name: " + this.state.playersData[u].name + " HoleData: " + this.state.playersData[u].holeData);
        }
    }

    updatePlayerData(player, isGoingDown){
        for(var i in this.state.playersData){
            let singlePlayer = this.state.playersData[i];

            if(singlePlayer.name === player){
                let currentScore = this.state.playersData[i].totalScore;
                let currentRawScore = this.state.playersData[i].parScore;

                if(isGoingDown){
                    this.state.playersData[i].totalScore = currentScore - 1;
                    this.state.playersData[i].parScore = currentRawScore - 1;
                }
                else{
                    this.state.playersData[i].totalScore = currentScore + 1;
                    this.state.playersData[i].parScore = currentRawScore + 1;
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
                let currentRAWScoreForThatHole = singlePlayer.rawHoleData[currentHole];

                if(isGoingDown){
                    if(currentScoreForThatHole > 1){
                        this.state.playersData[i].holeData[currentHole] = currentScoreForThatHole - 1;
                        this.state.playersData[i].rawHoleData[currentHole] = currentRAWScoreForThatHole - 1;
                    }
                    else{
                        // Disable '-' Button for that player
                    }
                }
                else{
                    this.state.playersData[i].holeData[currentHole] = currentScoreForThatHole + 1;
                    this.state.playersData[i].rawHoleData[currentHole] = currentRAWScoreForThatHole + 1;
                }
            }
        }
    }

    completeHole(){
        this.changeWhichHoleToShow(this.state.holeToDisplay + 2);
        this.state.holesData[this.state.holeToDisplay - 1].status = true;

        /* Handling to show exit to results */
        if(this.state.holeToDisplay === parseInt(this.state.numberOfHoles) - 1){
            this.props.handleTriggerFinalHole(true);
            this.props.sendPlayerData(this.state.playersData);
        }
    }

    render(){

        if(this.state.initialRender){
            this.state.numberOfHoles = this.props.numberOfHoles; // Using setState() for these also slows things down
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
                    holeData={this.state.holesData}
                    numberOfHoles={this.props.numberOfHoles}
                    latestHole={this.state.latestHole}
                    changeWhichHoleToShow={this.changeWhichHoleToShow.bind(this)}
                    completeHole={this.completeHole.bind(this)}
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