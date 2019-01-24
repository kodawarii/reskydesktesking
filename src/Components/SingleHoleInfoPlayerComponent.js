import React, { Component } from 'react';

class SingleHoleInfoPlayerComponent extends Component{

    constructor(){
        super()
    }

    handleUpdatePlayers(name, isGoingDown){
        console.log("Handling Update Players in SingleHoleInfoPlayerComponent");
        this.props.updatePlayerData(name, isGoingDown);
    }

    render(){

        let listOfPlayersData = this.props.listOfPlayersData;
        
        let tableContent = listOfPlayersData.map(player => {
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
                        hole.getPlayerScore
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