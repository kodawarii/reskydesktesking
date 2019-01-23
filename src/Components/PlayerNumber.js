import React, { Component } from 'react';

/*
    @ToDo:
    <> Make default button options cus typing a number is shit painful
    <>
    <>
    <>
    <>
*/

class PlayerNumber extends Component{

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
                this.props.numberOfPlayers(this.state.inputNumber);
                this.props.goingToNumberOfHoles();
            });
        }

        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit.bind(this)}>
                    <p>Enter Number of Players</p> 
                    <input type="text" ref="number"/>
                    <input id="submitButton" type="submit" value="Submit" />
                 </form>
            </div>
        );
    }
}

export default PlayerNumber;