import React, {Component} from 'react';

// Components
import SingleHoleInfo from './SingleHoleInfo';

class PlayGameState extends Component{

    constructor(){
        super();

        this.state = {
            numberOfPlayers: '',
            numberOfHoles: '',
            players: []
        }
    }

    render(){

        this.state.numberOfPlayers = this.props.numberOfPlayers;
        this.state.numberOfHoles = this.props.numberOfHoles;
        this.state.players = this.props.players;

        let toRender = <SingleHoleInfo
        
        />

        return(
            <div>
                {toRender}
            </div>
        );
    }
}

export default PlayGameState;