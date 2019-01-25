import React, { Component } from 'react';

class SingleHoleInfoTopComponent extends Component{

    constructor(){
        super()

        this.state={
            par: '3'
        }
    }

    handleUpdateHoleNumber(direction){
        this.props.handleUpdateHoleNumber(direction);
    }

    render(){

        let currentHole = this.props.currentHole;
        let par = this.state.par;

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
                    <button> - </button>
                    Par: {par}
                    <button> + </button> 
                </div>
            </div>
        );
    }
}

export default SingleHoleInfoTopComponent;