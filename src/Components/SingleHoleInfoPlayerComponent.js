import React, { Component } from 'react';

class SingleHoleInfoPlayerComponent extends Component{

    constructor(){
        super()
    }

    render(){

        let listOfPlayers = this.props.listOfPlayers;
        
        let tableContent = listOfPlayers.map(name => {

            return(
                <tr>
                    <td>
                        {name}
                    </td>

                    <td>
                        Total: 
                    </td>

                    <td>
                        +5
                    </td>

                    <td>
                        Current: 
                    </td>

                    <td>
                        <button> - </button>
                        +2
                        <button> + </button> 
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