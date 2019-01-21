import React , {Component} from 'react';

class PlayGameState extends Component{

    constructor(){
        super();

        this.state = {
            numberOfPlayers: '',
            numberOfHoles: ''
        }
    }

    render(){

        this.state.numberOfPlayers = this.props.numberOfPlayers;
        this.state.numberOfHoles = this.props.numberOfHoles;

        return(
            <div>
                <p> Enter Your Scores: </p>
                
            </div>
        );
    }
}

export default PlayGameState;