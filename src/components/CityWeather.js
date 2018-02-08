import React from 'react';
import {Day, Li} from '../styles';

//One day weather block with
//@temperature - average temperature.
//@wind - the wind speed.
export default class CityWeather extends React.Component{

    render(){
        const city = this.props.current;
        const temperature = city.main? city.main : 'no temperature yet';
        const cityName =  city.name ? city.name : 'no name yet';
        const wind =  city.wind ? city.wind : 'no wind yet';
        return(

            <Li>
                <Day>{cityName}</Day>
                Temperature: {temperature.toString()} <br/>
                Wind speed: {wind.toString()} <br />
            </Li>

        );
    }
}