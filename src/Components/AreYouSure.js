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
                    <li><button onClick={this.props.goingToResetGame} className="resetButtons"> Yes </button></li>
                    <li> or </li>
                    <li><button onClick={this.props.lol} className="resetButtons"> No </button></li>
                </ul>
            </div>
        );
    }
}

export default AreYouSure;