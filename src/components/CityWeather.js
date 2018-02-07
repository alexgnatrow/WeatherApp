import React from 'react';
import {Day, Li} from '../styles';

//One day weather block with
//@temperature - average temperature.
//@wind - the wind speed.
export default class CityWeather extends React.Component{

    render(){
        const city = this.props.data;
        const temperature = ()=> {
            if(city.main.temp){
                return city.main.temp - 273;
            } else return 'No temp yet';
        };
        const name = ()=> {
            if(city.name){
                return city.name;
            } else return 'Noname';
        };
        const wind = ()=> {
            if(city.wind){
                return city.wind;
            } else return 'No wind data yet';
        };
        return(


            <Li>
                <Day>This day</Day>
                {temperature} <br/>
                {name}<br/>
                {wind}
                this data
            </Li>

        );
    }
}