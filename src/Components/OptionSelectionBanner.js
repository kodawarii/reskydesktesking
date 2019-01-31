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
                    <span onClick={this.props.goingToAreYouSurePage} className="infoBannerPLAY"> Reset Game &#8635; </span>
                </div>
            );
        }
        else if(currentComponent === 'playerNumberState'){
            return(
                <div>
                    <span className="infoBannerPLAYERNUMBER"> Players: {players} </span>
                    <span className="paddingThingy"> | </span>
                    <span className="infoBannerPLAYERNUMBER"> Holes: {holes} </span>
                </div>
            );
        }
        else if(currentComponent === 'holeNumberState'){
            return(
                <div>
                    <span onClick={this.props.goingToNumberOfPlayers} className="infoBannerHOLENUMBERplayer"> Players: {players} </span>
                    <span className="paddingThingy"> | </span>
                    <span onClick={this.props.goingToNumberOfHoles} className="infoBannerHOLENUMBER"> Holes: {holes} </span>
                </div>
            );
        }
        else if(currentComponent === 'EnterNameState'){
            return(
                <div>
                    <span onClick={this.props.goingToNumberOfPlayers} className="infoBannerENTERNAMES"> Players: {players} </span>
                    <span className="paddingThingy"> | </span>
                    <span onClick={this.props.goingToNumberOfHoles} className="infoBannerENTERNAMES"> Holes: {holes} </span>
                </div>
            );
        }
    }
}

export default OptionSelectionBanner;