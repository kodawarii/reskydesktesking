import React, { Component } from 'react';

// Stylesheets
import './STYLE_SingleHoleInfoBottomComponent.css';

class SingleHoleInfoPlayerComponent extends Component{

    handleUpdatePlayers(name, isGoingDown){
        console.log("Handling Update Players in SingleHoleInfoPlayerComponent");
        this.props.updatePlayerData(name, isGoingDown);
        this.props.updatePlayerDataForHole(name, isGoingDown);
        this.forceUpdate();
    }

    render(){
        
        let tableContent = this.props.listOfPlayersData.map(player => {
            return(
                <tr>
                    <td>
                        {player.name}
                    </td>

                    <td>
                        Total: 
                    </td>

                    <td>
                        {player.score} &nbsp; &nbsp;
                    </td>

                    <td>
                        Current: &nbsp;
                    </td>

                    <td>
                        <button onClick={this.handleUpdatePlayers.bind(this, player.name, true)} className="playerScoreButton"> - </button>
                        &nbsp; {player.holeData[this.props.currentHole]} &nbsp;
                        <button onClick={this.handleUpdatePlayers.bind(this, player.name, false)} className="playerScoreButton"> + </button> 
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <table>
                    {tableContent}
                </table>
            </div>
        );
    }
}

export default SingleHoleInfoPlayerComponent;