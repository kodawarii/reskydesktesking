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

    render(){

        this.state.numberOfHoles = this.props.numberOfHoles;
        this.state.players = this.props.players;

        // rendering just one sample of singleHoleInfo whilst implementing design of singleHoleInfo
        // @To-Do: need to implement switch-case where which singleHoleInfo to show
        let toRender = <SingleHoleInfo
        listOfPlayers={this.state.players}
        />

        return(
            <div>
                {toRender} 
            </div>
        );
    }
}

export default PlayGameState;