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
                let classColor = this.getColor(x) + " scoreCell";
                return(
                    <td className={classColor}>
                        {x}
                    </td>
                );
            });

            /* Making an excuse-array for making .map function to make hole numbers at top row */
            let workingArray = [];
            for(var i = 0; i < parseInt(this.props.holes); i++){
                workingArray.push(i + 1);
            }

            /* Making an excuse-array for making .map function to make hole numbers at top row */
            let topBit = workingArray.map(x => {
                return(
                    <td className="scoreCell holeNumberCell">
                        {x}
                    </td>
                );
            });

            return(
               <div className="resultsPage">

                   <span><b> {player.name} ( {player.totalScore} ) </b></span>

                   <table className="resultsTable">
                       <tbody>
                           <tr>
                               {topBit}
                           </tr>
                           <tr>
                               {scores}
                           </tr>
                       </tbody>
                   </table>
                   
                   <br/><br/>

               </div>
            );
        });

        return(
            <div className="resultsTable">
                <div>
                    <button className="resultsNavItem"> Save </button> &nbsp; | &nbsp;
                    <button className="resultsNavItem"> Restart </button> &nbsp; | &nbsp;
                    <button className="resultsNavItem"> Back </button>
                </div>
                
                <h2>Overall Scores</h2>
                
                <br/>
                
                {things}
            </div>
        );
    }
}

export default ResultsPage;