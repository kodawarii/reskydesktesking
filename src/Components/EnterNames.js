import React, { Component } from 'react';

// Stylesheets
import './STYLE_EnterNames.css';

class EnterNames extends Component{
    constructor(){
        super();

        this.state = {
            listOfPlayers: [],
            numberOfPlayers:'',

            fields: {},
            errors: {}
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // fields has player1, player2 etc
        // So if we dont have a PlayerX, then it means its empty

        console.log("Fields: " + fields);
        console.log("listOfPlayers: " + this.state.listOfPlayers);

        for(var i in fields){
            if(!fields[i]){
                formIsValid = false;
                errors[i] = "Cannot be empty";
            }

            if(typeof fields[i] !== 'undefined'){
                if(!fields[i].match(/^[a-zA-Z]+$/)){
                    formIsValid = false;
                    errors[i] = "You may enter only letters";
                }
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value; // For example: 'Paul' would be built as Player1:['P', 'Pa', 'Pau', 'Paul']
        this.setState({fields});
    }
    
    handleSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
            for(var ref in this.refs){
                this.state.listOfPlayers.push(this.refs[ref].value);
            }
        
            this.props.setListOfPlayers(this.state.listOfPlayers);
            this.props.goingToPlayGameState();
        }
        else{
            // There is a Form Error
        }
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
                    <input type="text" ref={refString} maxLength="6" className="inputField" onChange={this.handleChange.bind(this, refString)} value={this.state.fields[refString]}/>
                    <br/>
                    <span className="error">{this.state.errors[refString]}</span>
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