import React, { Component } from 'react';

// Components
import SingleHoleInfoTopComponent from './SingleHoleInfoTopComponent';
import SingleHoleInfoPlayerComponent from './SingleHoleInfoPlayerComponent'

class SingleHoleInfo extends Component{

    constructor(){
        super()

        this.state={
            currentHole: '1',
        }
    }

    render(){

        let topComponent = <SingleHoleInfoTopComponent 
        currentHole={this.state.currentHole}
        />;

        let playerComponent = <SingleHoleInfoPlayerComponent 
        listOfPlayers={this.props.listOfPlayers}
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