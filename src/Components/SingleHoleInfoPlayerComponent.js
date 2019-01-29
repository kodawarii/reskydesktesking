import React, { Component } from 'react';

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
                        {player.score}
                    </td>

                    <td>
                        Current: 
                    </td>

                    <td>
                        <button onClick={this.handleUpdatePlayers.bind(this, player.name, true)}> - </button>
                        {player.holeData[this.props.currentHole]}
                        <button onClick={this.handleUpdatePlayers.bind(this, player.name, false)}> +  </button> 
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