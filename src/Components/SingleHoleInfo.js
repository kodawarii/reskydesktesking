import React, { Component } from 'react';

// Components
import SingleHoleInfoTopComponent from './SingleHoleInfoTopComponent';
import SingleHoleInfoPlayerComponent from './SingleHoleInfoPlayerComponent'

class SingleHoleInfo extends Component{

    render(){

        let topComponent = <SingleHoleInfoTopComponent 
        currentHole={this.props.holeNumber}
        handleUpdateHoleNumber={this.props.updateHoleNumber.bind(this)}
        handleUpdateParNumber={this.props.updateParNumber.bind(this)}
        par={this.props.par}
        />;

        let playerComponent = <SingleHoleInfoPlayerComponent 
        listOfPlayersData={this.props.listOfPlayersData}
        updatePlayerData={this.props.updatePlayerData}
        updatePlayerDataForHole={this.props.updatePlayerDataForHole}
        currentHole={this.props.holeNumber}
        par={this.props.par}
        holeData={this.props.holeData}
        numberOfHoles={this.props.numberOfHoles}
        />

        return (
            <div>
                {topComponent}
                <br/><br/>
                {playerComponent}
            </div>
        );
    }
}

export default SingleHoleInfo;