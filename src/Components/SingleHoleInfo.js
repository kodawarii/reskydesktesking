import React, { Component } from 'react';

// Components
import SingleHoleInfoTopComponent from './SingleHoleInfoTopComponent';
import SingleHoleInfoPlayerComponent from './SingleHoleInfoPlayerComponent'

class SingleHoleInfo extends Component{

    render(){

        let topComponent = <SingleHoleInfoTopComponent 
        currentHole={this.props.holeNumber}
        handleUpdateHoleNumber={this.props.updateHoleNumber.bind(this)}
        />;

        let playerComponent = <SingleHoleInfoPlayerComponent 
        listOfPlayersData={this.props.listOfPlayersData}
        updatePlayerData={this.props.updatePlayerData}
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