import React, {Component} from 'react';

// Stylesheets
import './STYLE_AreYouSure.css';

class AreYouSure extends Component{

    // should be onClick={this.props.goingToReturnToPlayGameState} for second button
    
    render(){
        return(
            <div>
                <p>This will Reset <u>Everything</u>, Are you sure?</p>
                <ul>
                    <li><button onClick={this.props.goingToNumberOfPlayers} className="resetButtons"> Yes </button></li>
                    <li> or </li>
                    <li><button onClick={this.props.goingToNumberOfPlayers} className="resetButtons"> Yes </button></li>
                    <li>(This is no Joke, I dunno how to code 'No' Option, so you're fucked)</li>
                </ul>
            </div>
        );
    }
}

export default AreYouSure;