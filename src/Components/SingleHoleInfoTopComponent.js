import React, { Component } from 'react';

// Components
import HoleBanner from './HoleBanner';

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
        let latestHole = this.props.latestHole;

        let leftHoleArrowButtonClassName = "HoleArrowButton";
        let rightHoleArrowButtonClassname = "HoleArrowButton";

        let leftPARButtonMINUS = "ParArrowButtonMINUS";
        let rightPARButtonPLUS = "ParArrowButtonPLUS";

        if(currentHole === 1){
            leftHoleArrowButtonClassName += " disableLeftHoleArrowButton";
        }

        if(currentHole === this.props.holeData.length){
            rightHoleArrowButtonClassname += " disableRightHoleArrowButton";
        }

        if(par === 1){
            leftPARButtonMINUS += " disableLeftPARButton";
        }

        return (
            <div>
                <HoleBanner
                numberOfHoles={this.props.numberOfHoles}
                changeWhichHoleToShow={this.props.changeWhichHoleToShow.bind(this)}
                currentHole={this.props.currentHole}
                />

                <div>
                    <span className="headerArea">
                        <button onClick={this.handleUpdateHoleNumber.bind(this, 'prev')} className={leftHoleArrowButtonClassName}> &#9664; </button>
                        &nbsp; Hole {currentHole} &nbsp;
                        <button onClick={this.handleUpdateHoleNumber.bind(this, 'next')} className={rightHoleArrowButtonClassname}> &#9654; </button> 
                    </span>
                </div>

                <div>
                    <span className="latestHoleLabel">
                        Last Played Hole: <b>{latestHole}</b>
                    </span>
                </div>

                <br/>
                
                <div className="parData">
                        PAR &nbsp; &nbsp;
                        <button onClick={this.handleUpdateParNumber.bind(this, 'minus')} className={leftPARButtonMINUS}> - </button>
                        &nbsp; <span className="parNumber"> {par} </span> &nbsp;
                        <button onClick={this.handleUpdateParNumber.bind(this, 'add')} className={rightPARButtonPLUS}> + </button> 
                </div>
            </div>
        );
    }
}

export default SingleHoleInfoTopComponent;