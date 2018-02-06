import React from 'react';
import {Day, Li} from '../styles';

//One day weather block with
//@temperature - average temperature.
//@wind - the wind speed.
export default class CityWeather extends React.Component{

    render(){
        // const city = this.props.data;
        // const temperature = city[0].main.temp || 'no temp yet';
        // const wind = city[0].wind || 'no wind yet';
        return(


            <Li>
                <Day>This day</Day>
                {/*{temperature} <br> {city[0].name}</br>*/}
                {/*{wind}*/}
                this data
            </Li>

        );
    }
}