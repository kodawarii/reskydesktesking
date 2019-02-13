import React, { Component } from 'react';

// CSS Stylesheets
import './STYLE_HoleBanner.css';

class HoleBanner extends Component{

    goToHole(x){
        this.props.changeWhichHoleToShow(x);
    }

    render(){
        let bufferArray = [];
        for(var i = 0; i < this.props.numberOfHoles; i++){
            bufferArray.push(i + 1);
            console.log(i);
        }

        let collection = bufferArray.map(x => {
            let className = "holeBannerNumberCell holeNumber" + x;
            
            if(this.props.currentHole + 1 === parseInt(x)){
                className += " greyOutThisHole";
            }

            return(
                <span className={className} onClick={this.goToHole.bind(this, x)}> {x} </span>
            );
        });

        return(
            <div className="holeBannerContainer">
                {collection} 
            </div>
        );
    }
}

export default HoleBanner;