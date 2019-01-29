import React, { Component } from 'react';

/*
    @ToDo:
    <DONE> Make default button options cus typing a number is shit painful
    <>
    <>
    <>
    <>
*/

// Stylesheets
import './STYLE_EnterPlayerNumber.css';

class PlayerNumber extends Component{

    constructor(){
        super();

        this.state={
            inputNumber: ''
        }
    }

    /* // deprecated function no longer in use
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
    */

    handleDefaultPlayers(num){
        this.setState({
            inputNumber: num
        }, function(){
            console.log(this.state);
            this.props.numberOfPlayers(this.state.inputNumber);
            this.props.goingToNumberOfHoles();
        });
    }

    render(){
        return(
            <div>
                <form>
                    Select Number of Players:
                    <ul className="listPlayerNumber">
                        <li>
                            <button onClick={this.handleDefaultPlayers.bind(this, 1)} className="playerNumberButton"> 1 </button>
                        </li>
                        <li>
                            <button onClick={this.handleDefaultPlayers.bind(this, 2)} className="playerNumberButton"> 2 </button>
                        </li>
                        <li>
                            <button onClick={this.handleDefaultPlayers.bind(this, 3)} className="playerNumberButton"> 3 </button>
                        </li>
                        <li>
                            <button onClick={this.handleDefaultPlayers.bind(this, 4)} className="playerNumberButton"> 4 </button>
                        </li>
                    </ul>

                    <ul className="listPlayerNumber">
                        <li>
                            <button onClick={this.handleDefaultPlayers.bind(this, 5)} className="playerNumberButton"> 5 </button>
                        </li>
                        <li>
                            <button onClick={this.handleDefaultPlayers.bind(this, 6)} className="playerNumberButton"> 6 </button>
                        </li>
                        <li>
                            <button onClick={this.handleDefaultPlayers.bind(this, 7)} className="playerNumberButton"> 7 </button>
                        </li>
                        <li>
                            <button onClick={this.handleDefaultPlayers.bind(this, 8)} className="playerNumberButton"> 8 </button>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default PlayerNumber;