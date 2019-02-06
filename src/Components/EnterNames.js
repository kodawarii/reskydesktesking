import React, { Component } from 'react';

// Stylesheets
import './STYLE_EnterNames.css';

class EnterNames extends Component{
    constructor(){
        super();

        this.state = {
            listOfPlayers: [],
            numberOfPlayers:'',

            realFields: {},

            fields: {},
            errors: {},
            missingPlayers: []
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let realFields = this.state.realFields;
        let errors = {};
        let formIsValid = true;

        let fieldIsEmpty = false;

        // fields has player1:qwe, player2:qwe etc
        // So if we dont have a PlayerX, then it means its empty

        for(var i in realFields){
            console.log("fields[i]: " + fields[i]); // Paul, Monica, Other, etc ...
            console.log("i: " + i); // player1, player2, player3 ...
            if(!fields[i]){
                formIsValid = false;
                fieldIsEmpty = true;
                errors[i] = "Cannot be empty";
            }
            else{
                fieldIsEmpty = false;
            }

            if(typeof fields[i] !== 'undefined' && !fieldIsEmpty){
                if(!fields[i].match(/^[a-zA-Z]+$/)){
                    formIsValid = false;
                    errors[i] = "You may enter only letters";
                }
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleChange(field, e){ // field is player1, player2 etc, and e is ['P', 'Pa', 'Pau', 'Paul']
        let fields = this.state.fields;
        let realFields = this.state.realFields;
        
        fields[field] = e.target.value;
        realFields[field] = e.target.value;

        console.log(fields[field]);
        this.setState({fields});
        this.setState({realFields});
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
        this.state.numberOfPlayers =  this.props.numberOfPlayers;

        // Initializing Array for destroying null array
        let tempArray = [];
        for(var i = 0; i < parseInt(this.state.numberOfPlayers); i++){
            tempArray.push(i);
        }

        // Creating list of input fields for players Names, ref references for each input field is player1 player2 ... etc
        let theFields;
        theFields = tempArray.map(x => {
            let refString = 'playerNo' + (x+1);
            this.state.realFields[refString] = '';
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