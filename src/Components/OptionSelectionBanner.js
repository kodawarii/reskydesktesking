import React, { Component } from 'react';

class OptionSelectionBanner extends Component{

    render(){
        let players = this.props.numberOfPlayers;
        let holes = this.props.numberOfHoles;

        return(
            <div>
                Players: {players} | Holes: {holes}
            </div>
        );
    }
}

export default OptionSelectionBanner;