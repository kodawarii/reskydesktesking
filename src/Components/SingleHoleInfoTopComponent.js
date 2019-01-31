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
                        <button onClick={this.handleUpdateHoleNumber.bind(this, 'prev')} className="HoleArrowButton"> &#9664; </button>
                        &nbsp; Hole {currentHole} &nbsp;
                        <button onClick={this.handleUpdateHoleNumber.bind(this, 'next')} className="HoleArrowButton"> &#9654; </button> 
                    </h1>
                </div>
                
                <div className="parData">
                        PAR &nbsp; &nbsp;
                        <button onClick={this.handleUpdateParNumber.bind(this, 'minus')} className="ParArrowButtonMINUS"> - </button>
                        &nbsp; <span className="parNumber"> {par} </span> &nbsp;
                        <button onClick={this.handleUpdateParNumber.bind(this, 'add')} className="ParArrowButtonPLUS"> + </button> 
                </div>
            </div>
        );
    }
}

export default SingleHoleInfoTopComponent;