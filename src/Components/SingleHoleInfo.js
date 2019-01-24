import React, { Component } from 'react';

// Components
import SingleHoleInfoTopComponent from './SingleHoleInfoTopComponent';
import SingleHoleInfoPlayerComponent from './SingleHoleInfoPlayerComponent'

class SingleHoleInfo extends Component{

    constructor(){
        super()

        this.state={
            currentHole: '1',
            holeData: []
        }
    }

    render(){

        let topComponent = <SingleHoleInfoTopComponent 
        currentHole={this.state.currentHole}
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