import React, { Component } from 'react';

/*
    @To-Do:

    <DONE> Have default 9 hole or 18 hole option
    <>
    <>
    <>
*/


// Stylesheets
import './STYLE_EnterHoleNumber.css';

class HoleNumber extends Component{

    constructor(){
        super();

        this.state={
            inputNumber: ''
        }
    }

    /**
     * Deprecated Method
     */

    /*
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
                this.props.goingToEnterNameState();
            });
        }

        e.preventDefault();
    }
    */

    handleDefaultHoles(num){
        //alert(num);
        this.setState({
            inputNumber: num
        }, function(){
            console.log(this.state);
            this.props.numberOfHoles(num);
            this.props.goingToEnterNameState();
        });
    }

    render(){
        return(
            <div>
                Select Number of Holes:
                 <form> 
                     <ul className="listHoleNumber">
                         <li>
                            <button onClick={this.handleDefaultHoles.bind(this, '9')} className="holeNumberButton" id="nineHoles"> 9 Holes </button>
                         </li>
                         <li>
                            <button onClick={this.handleDefaultHoles.bind(this, '18')} className="holeNumberButton" id="eighteenHoles"> 18 Holes </button>
                         </li>
                     </ul>
                 </form>
            </div>
        );
    }
}

export default HoleNumber;