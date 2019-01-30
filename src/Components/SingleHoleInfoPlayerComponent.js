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

            // Overall PAR-Score
            let parScoreString 
            let score = player.parScore - this.props.par;
            if(score > 0){
                parScoreString = "+" + score;
            }
            else if(score === 0){
                parScoreString = "E";
            }
            else{
                parScoreString = score;
            }

            // Current Hole PAR-Score
            let parScoreString2;
            let score2 = player.holeDataPAR[this.props.currentHole] - this.props.par;
            if(score > 0){
                parScoreString2 = "+" + score;
            }
            else if(score === 0){
                parScoreString2 = "E";
            }
            else{
                parScoreString2 = score;
            }

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
                                    <span>Total</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="currentHoleScore"> 
                                        {player.totalScore}
                                        <span className="parScore"> ( {parScoreString} ) </span>
                                    </span>
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
                                    <button onClick={this.handleUpdatePlayers.bind(this, player.name, true)} className="playerScoreButtonMINUS"> - </button> &nbsp;
                                         <span className="currentHoleScore">
                                            {player.holeData[this.props.currentHole]}
                                            <span className="parScore"> ( {parScoreString2} ) </span>
                                         </span>
                                    &nbsp; <button onClick={this.handleUpdatePlayers.bind(this, player.name, false)} className="playerScoreButtonPLUS"> + </button> 
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