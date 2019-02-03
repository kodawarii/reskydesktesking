import React, {Component} from 'react';

// Stylesheets
import './STYLE_Results.css'

class ResultsPage extends Component{

    render(){
        let things = this.props.data.map(player => {
            let scores = player.holeData.map(x => {
                return(
                    <td>
                        {x}
                    </td>
                );
            });

            return(
                <tr>
                    <td className="firstColumn">
                        {player.name} ( {player.totalScore} )
                    </td>

                    {scores}
                </tr>
            );
        });

        /* Making an excuse-array for making .map function to make hole numbers at top row */
        let workingArray = [];
        for(var i = 0; i < parseInt(this.props.holes); i++){
            workingArray.push(i + 1);
        }

        /* Making the actual top row displaying the hole number */
        let topBit = workingArray.map(x => {
            return(
                <td className="resultsTopRow">
                    {x}
                </td>
            );
        });

        return(
            <table className="resultsTable">
                <tbody>

                    <tr> 
                        <td className="resultsTopRow firstColumn">
                            Hole
                        </td>

                        {topBit}
                    </tr>


                    {things}
                </tbody>
            </table>
        );
    }
}

export default ResultsPage;