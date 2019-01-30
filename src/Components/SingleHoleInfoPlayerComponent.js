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
        
        let toRender = this.props.listOfPlayersData.map(player => {
            return(
                <tr>
                    <td>
                        <span className="playerNameText">{player.name}</span>
                    </td>

                    <td>
                        <table>
                        <tbody>
                            <tr>
                                <td>
                                    Total
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="currentHoleScore"> {player.score}</span>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>

                    <td>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    Current
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={this.handleUpdatePlayers.bind(this, player.name, true)} className="playerScoreButtonMINUS"> - </button>
                                    &nbsp; <span className="currentHoleScore">{player.holeData[this.props.currentHole]}</span> &nbsp;
                                    <button onClick={this.handleUpdatePlayers.bind(this, player.name, false)} className="playerScoreButtonPLUS"> + </button> 
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <table className="playerTable">
                <tbody>
                    {toRender}
                </tbody>
                </table>
            </div>
        );
    }
}

export default SingleHoleInfoPlayerComponent;