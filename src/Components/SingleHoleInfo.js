import React, { Component } from 'react';

// Components
import SingleHoleInfoTopComponent from './SingleHoleInfoTopComponent';
import SingleHoleInfoPlayerComponent from './SingleHoleInfoPlayerComponent'

class SingleHoleInfo extends Component{

    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <SingleHoleInfoTopComponent />
                <SingleHoleInfoPlayerComponent />
            </div>
        );
    }
}

export default SingleHoleInfo;