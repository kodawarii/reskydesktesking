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
                <table class="playerTable">
                    <tr>
                        <td>
                            {player.name}
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                    Total: 
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {player.score} &nbsp; &nbsp;
                                    </td>
                                </tr>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                                        Current: &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button onClick={this.handleUpdatePlayers.bind(this, player.name, true)} className="playerScoreButtonMINUS"> - </button>
                                        &nbsp; {player.holeData[this.props.currentHole]} &nbsp;
                                        <button onClick={this.handleUpdatePlayers.bind(this, player.name, false)} className="playerScoreButtonPLUS"> + </button> 
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            );
        });

        return (
            <div>
                {toRender}
            </div>
        );
    }
}

export default SingleHoleInfoPlayerComponent;