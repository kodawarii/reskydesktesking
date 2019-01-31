import React, { Component } from 'react';

// Stylesheets
import './STYLE_OptionSelectionBanner.css';

class OptionSelectionBanner extends Component{

    render(){
        let players = this.props.numberOfPlayers;
        let holes = this.props.numberOfHoles;
        let currentComponent = this.props.currentComponent;

        if(currentComponent === 'playGameState'){
            return(
                <div>
                    Players: {players} | Holes: {holes} 
                    <br/> <br/> 
                    <span onClick={this.props.goingToAreYouSurePage} className="infoBanner1"> Reset Game &#8635; </span>
                </div>
            );
        }
        else{
            return(
                <div>
                    <span onClick={this.props.goingToNumberOfPlayers} className="infoBanner2"> Players: </span> {players} | 
                    <span onClick={this.props.goingToNumberOfHoles} className="infoBanner2"> Holes: </span> {holes}
                </div>
            );
        }
    }
}

export default OptionSelectionBanner;