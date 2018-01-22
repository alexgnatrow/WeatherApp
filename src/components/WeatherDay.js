import React from 'react';
import {Day, Li} from './styles';

//One day weather block with
//@temperature - average temperature.
//@clouds - the sky state.
export default class WeatherDay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: 'no temperature yet',
            payload: 'no data yet',
        }
    }

    render(){
        return(
            <Li>
                <Day>{this.props.name}</Day>
                {this.state.temperature} <br></br>
                {this.state.payload}
            </Li>

        );
    }
}