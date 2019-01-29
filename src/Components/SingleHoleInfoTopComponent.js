import React, { Component } from 'react';

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

        //@ To-Do: 
        // If hole number = 1 or max, then disable button

        return (
            <div>
                <div>
                    <button onClick={this.handleUpdateHoleNumber.bind(this, 'prev')}> ← </button>
                    Hole {currentHole}
                    <button onClick={this.handleUpdateHoleNumber.bind(this, 'next')}> → </button> 
                </div>
                <div>
                    <button onClick={this.handleUpdateParNumber.bind(this, 'minus')}> - </button>
                    PAR {par}
                    <button onClick={this.handleUpdateParNumber.bind(this, 'add')}> + </button> 
                </div>
            </div>
        );
    }
}

export default SingleHoleInfoTopComponent;