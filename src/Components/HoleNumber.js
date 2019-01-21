import React, { Component } from 'react';

/*
    @To-Do:

    <DONE> Have default 9 hole or 18 hole option
    <>
    <>
    <>
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
                this.props.goingToEnterNameState();
            });
        }

        e.preventDefault();
    }

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
                <form onSubmit = {this.handleSubmit.bind(this)}>
                    <p>Enter Number of Holes</p> 
                    <input type="text" ref="number"/>
                    <input id="submitButton" type="submit" value="Submit" />
                 </form>

                 <form> 
                     <button onClick={this.handleDefaultHoles.bind(this, '9')}> 9 Holes </button>
                     <button onClick={this.handleDefaultHoles.bind(this, '18')}> 18 Holes </button>
                 </form>
            </div>
        );
    }
}

export default HoleNumber;