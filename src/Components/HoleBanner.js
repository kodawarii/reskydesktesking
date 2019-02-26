import React, { Component } from 'react';

// CSS Stylesheets
import './STYLE_HoleBanner.css';

class HoleBanner extends Component{

    goToHole(x){
        this.props.changeWhichHoleToShow(x);
    }

    render(){
        let numberOfHoles = this.props.numberOfHoles;

        let bufferArray = [];
        let bufferArray2 = [];

        if(numberOfHoles == 9){
            for(var i = 0; i < 9; i++){
                bufferArray.push(i + 1);
            }
        }
        else{
            for(var i = 0; i < 9; i++){
                bufferArray.push(i + 1);
            }

            for(var i = 9; i < 18; i++){
                bufferArray2.push(i + 1);
            }
        }

        let collection = bufferArray.map(x => {
            let className = "holeBannerNumberCell holeNumber" + x;
            
            if(this.props.currentHole + 1 === parseInt(x)){
                className += " greyOutThisHole";
            }

            if(this.props.holesData[parseInt(x) - 1].status){
                className += " finnishedHole";
            }

            return(
                <span className={className} onClick={this.goToHole.bind(this, x)}> {x} </span>
            );
        });


        let collection2;
        if(numberOfHoles == 18){
            collection2 = bufferArray2.map(x => {
                let className = "holeBannerNumberCell holeNumber" + x;
                
                if(this.props.currentHole + 1 === parseInt(x)){
                    className += " greyOutThisHole";
                }
    
                if(this.props.holesData[parseInt(x) - 1].status){
                    className += " finnishedHole";
                }
    
                return(
                    <span className={className} onClick={this.goToHole.bind(this, x)}> {x} </span>
                );
            });
        }

        return(
            <div className="holeBannerContainer">
                {collection} 
                <br/>
                {collection2}
            </div>
        );
    }
}

export default HoleBanner;