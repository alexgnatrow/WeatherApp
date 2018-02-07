import React from 'react';
import {Day, Li} from '../styles';

//One day weather block with
//@temperature - average temperature.
//@wind - the wind speed.
export default class CityWeather extends React.Component{

    render(){
        const city = this.props.current;
        const temperature = ()=> {
            console.log(city.main.temp);
            if(city.main.temp){
                return city.main.temp-273;
            } else return 'No temp yet';
        };
        const cityName = ()=> {
            console.log(city.name);
            if(city.name){
                return city.name;
            } else return 'Noname';
        };
        const wind = ()=> {
            console.log(city.wind);
            if(city.wind){
                return city.wind;
            } else return 'No wind data yet';
        };
        return(

            <Li>
                <Day>{cityName}this name{city.name}</Day>
                {temperature} <br/>
                {wind}
                this data
            </Li>

        );
    }
}