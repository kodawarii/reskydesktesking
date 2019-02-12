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

            let parOverScore;
            let className;
            if(player.parScore === 0){
                parOverScore = "E";
                className="blueTotal";
            }
            else if(player.parScore > 0){
                parOverScore = "+" + player.parScore;
                className="redTotal";
            }
            else{
                parOverScore = player.parScore;
                className="greenTotal";
            }

            return(
               <div className="resultsPage">
                   <span> 
                        <b> {player.name} &nbsp; </b>
                        <span className=""> {player.totalScore} </span>
                        <span className="overScoreNumber"> ( <span className={className}> {parOverScore} </span> ) </span>
                    </span>

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

        let totalPAR = 0;
        for(var i in this.props.holesData){
            totalPAR += parseInt(this.props.holesData[i].par);
        }

        return(
            <div className="resultsTable">
                <div>
                    <button className="resultsNavItem"> Save </button> &nbsp; | &nbsp;
                    <button className="resultsNavItem"> Restart </button> &nbsp; | &nbsp;
                    <button className="resultsNavItem"> Back </button>
                </div>
                
                <h2>Overall Scores</h2>
                <h4> For PAR: {totalPAR} </h4>
                
                <br/>
                
                {things}
            </div>
        );
    }
}

export default ResultsPage;