import React, { Component } from 'react';

// Stylesheets
import './STYLE_EnterNames.css';

class EnterNames extends Component{
    constructor(){
        super();

        this.state = {
            listOfPlayers: [],
            numberOfPlayers:''
        }
    }
    
    handleSubmit(e){
        for(var ref in this.refs){
            this.state.listOfPlayers.push(this.refs[ref].value);
        }
        
        this.props.setListOfPlayers(this.state.listOfPlayers);
        this.props.goingToPlayGameState();

        e.preventDefault();
    }

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

        // Creating list of input fields for players Names, ref references for each input field is player1 player2 ... etc
        let theFields;
        theFields = tempArray.map(x => {
            let refString = 'playerNo' + (x+1);
            return(
                <div>
                    Player  {x + 1} 
                    <input type="text" ref={refString} className="inputField"/>
                    <br/><br/>
                </div>
            );
        });

        // Render Component
        return(
            <div>
                <p>Enter your names:</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {theFields}
                    <br/>
                    <input id="submitButton" type="submit" value="Submit" className="submitButton"/>
                </form>
            </div>
        );
    }
}

export default EnterNames;