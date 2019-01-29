import React, { Component } from 'react';

// Stylesheets
import './STYLE_SingleHoleInfoTopComponent.css';

class SingleHoleInfoTopComponent extends Component{

    handleUpdateHoleNumber(direction){
        this.props.handleUpdateHoleNumber(direction);
    }

    handleUpdateParNumber(direction){
        this.props.handleUpdateParNumber(direction);
    }

    render(){

        let currentHole = this.props.currentHole + 1;
        let par = this.props.par;

        return (
            <div>
                <div>
                    <button onClick={this.handleUpdateHoleNumber.bind(this, 'prev')} className="HoleArrowButton"> ⯇ </button>
                    Hole {currentHole}
                    <button onClick={this.handleUpdateHoleNumber.bind(this, 'next')} className="HoleArrowButton"> ⯈ </button> 
                </div>
                <div>
                    <button onClick={this.handleUpdateParNumber.bind(this, 'minus')} className="HoleArrowButton"> - </button>
                    PAR {par}
                    <button onClick={this.handleUpdateParNumber.bind(this, 'add')} className="HoleArrowButton"> + </button> 
                </div>
            </div>
        );
    }
}

export default SingleHoleInfoTopComponent;