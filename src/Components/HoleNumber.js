import React, { Component } from 'react';

/*
    To-Do:
    <> Have default 9 hole or 18 hole option

*/

class HoleNumber extends Component{

    constructor(){
        super();

        this.state={
            inputNumber: ''
        }
    }

    handleSubmit(e){
        if(this.refs.number.value === ''){
            alert('Please enter a value');
        }
        else{
            this.setState({
                inputNumber: this.refs.number.value
            }, function(){
                console.log(this.state);
                this.props.numberOfHoles(this.state.inputNumber);
                this.props.goingToPlayGameState();
            });
        }

        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit.bind(this)}>
                    <p>Enter Number of Holes</p> 
                    <input type="text" ref="number"/>
                    <input id="submitButton" type="submit" value="Submit" />
                 </form>
            </div>
        );
    }
}

export default HoleNumber;