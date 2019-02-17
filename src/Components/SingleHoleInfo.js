import React, { Component } from 'react';

// Components
import SingleHoleInfoTopComponent from './SingleHoleInfoTopComponent';
import SingleHoleInfoPlayerComponent from './SingleHoleInfoPlayerComponent'

// Stylesheets
import './STYLE_SingleHoleInfo.css';


class SingleHoleInfo extends Component{

    render(){

        let topComponent = <SingleHoleInfoTopComponent 
        currentHole={this.props.holeNumber}
        handleUpdateHoleNumber={this.props.updateHoleNumber.bind(this)}
        handleUpdateParNumber={this.props.updateParNumber.bind(this)}
        par={this.props.par}
        latestHole={this.props.latestHole}
        holeData={this.props.holeData}
        numberOfHoles={this.props.numberOfHoles}
        changeWhichHoleToShow={this.props.changeWhichHoleToShow.bind(this)}
        />;

        let playerComponent = <SingleHoleInfoPlayerComponent 
        listOfPlayersData={this.props.listOfPlayersData}
        updatePlayerData={this.props.updatePlayerData}
        updatePlayerDataForHole={this.props.updatePlayerDataForHole}
        currentHole={this.props.holeNumber}
        par={this.props.par}
        holeData={this.props.holeData}
        numberOfHoles={this.props.numberOfHoles}
        />;

        let finnishButton;
        if(this.props.holeNumber !== (parseInt(this.props.numberOfHoles) - 1) && !this.props.holeData[this.props.holeNumber].status){
            finnishButton = <button onClick={this.props.completeHole.bind(this)} className="completeHoleBtn">End Hole</button>;
        }
        else{
            finnishButton = '';
        }

        return (
            <div>
                {topComponent}
                <br/><br/>
                {playerComponent}
                <br/>
                {finnishButton}
            </div>
        );
    }
}

export default SingleHoleInfo;