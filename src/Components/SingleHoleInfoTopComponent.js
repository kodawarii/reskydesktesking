import React, { Component } from 'react';

class SingleHoleInfoTopComponent extends Component{

    constructor(){
        super()

        this.state={
            par: '3'
        }
    }

    render(){

        let currentHole = this.props.currentHole;
        let par = this.state.par;

        return (
            <div>
                <div>
                    <button> ← </button>
                    Hole {currentHole}
                    <button> → </button> 
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