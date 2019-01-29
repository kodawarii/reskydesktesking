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
                    <h1>
                        <button onClick={this.handleUpdateHoleNumber.bind(this, 'prev')} className="HoleArrowButton"> ⯇ </button>
                        &nbsp; Hole {currentHole} &nbsp;
                        <button onClick={this.handleUpdateHoleNumber.bind(this, 'next')} className="HoleArrowButton"> ⯈ </button> 
                    </h1>
                </div>
                <br/>
                <div className="parData">
                    PAR &nbsp; &nbsp;
                    <button onClick={this.handleUpdateParNumber.bind(this, 'minus')} className="ParArrowButton"> - </button>
                    &nbsp; {par} &nbsp;
                    <button onClick={this.handleUpdateParNumber.bind(this, 'add')} className="ParArrowButton"> + </button> 
                </div>
            </div>
        );
    }
}

export default SingleHoleInfoTopComponent;