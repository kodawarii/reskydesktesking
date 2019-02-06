import React, {Component} from 'react';

// Stylesheets
import './STYLE_Results.css'

class ResultsPage extends Component{

    getColor(x){
        if(x === 1){
            return "gold";
        }
        else if(x === 2){
            return "green";
        }
        else if(x === 4){
            return "blue";
        }
        else if( x >= 5){
            return "red";
        }
    }

    render(){
        let things = this.props.data.map(player => {
            let scores = player.holeData.map(x => {
                let classColor = this.getColor(x);
                return(
                    <td className={classColor}>
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