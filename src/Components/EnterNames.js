import React, { Component } from 'react';

class EnterNames extends Component{
    constructor(){
        super();

        this.state = {
            listOfPlayers: [],
            numberOfPlayers:''
        }
    }

    /*
    handleSubmit(e){
        if(this.refs.name.value === ''){
            alert('');
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

    render(){

        // Converting temp to integer
        let temp;
        this.state.numberOfPlayers = this.props.numberOfPlayers;
        temp = parseInt(this.state.numberOfPlayers, 10);

        // Initializing Array for destroying null array
        let tempArray = new Array(temp + 1);
        for(var i = 0; i < temp; i++){
            tempArray.push(i);
        }

        // Creating list of input fields for players Names
        let theFields;
        theFields = tempArray.map(x => {
            return(
                <div>
                    <p> Player {x + 1} </p>
                    <input type="text" ref="name"/>
                </div>
            );
        });

        alert(theFields);

        // Render Component
        return(
            <div>
                <p>Enter your names:</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {theFields}
                    <input id="submitButton" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default EnterNames;