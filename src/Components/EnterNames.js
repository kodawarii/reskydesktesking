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

        let something = this.props.numberOfPlayers;
        this.state.numberOfPlayers =  something;

        // Initializing Array for destroying null array
        let tempArray = [];
        for(var i = 0; i < parseInt(this.state.numberOfPlayers); i++){
            tempArray.push(i);
        }

        // Creating list of input fields for players Names, ref references for each input field is player1 player2 ... etc
        let theFields;
        theFields = tempArray.map(x => {
            let refString = 'playerNo' + (x+1);
            return(
                <div>
                    Player  {x + 1} &nbsp; &nbsp;
                    <input type="text" ref={refString} maxLength="6" className="inputField"/>
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
                    <input id="submitButton" type="submit" value="Start" className="submitButton"/>
                </form>
            </div>
        );
    }
}

export default EnterNames;