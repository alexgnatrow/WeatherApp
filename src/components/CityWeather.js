import React from 'react';
import {Ul, Li, Img} from '../styles';

//One day weather block with
//@temperature - average temperature.
//@wind - the wind speed.
export default class CityWeather extends React.Component{


    render(){
        if(this.props.current === undefined){
            return null;
        } else {

        const city = this.props.current;
        const cityName =  city.name ? city.name : 'no name';
        console.log(city.main.temp)
        const temperature = city.main.temp ? Math.round(city.main.temp-273) : 'no temperature';
        const wind =  city.wind.speed ? city.wind.speed : 'no wind';
        const icon = city.weather[0].icon;
        const description = city.weather[0].description;

        return(

            <Ul>
                <Li>{cityName} <br/>
                <Img src={`https://openweathermap.org/img/w/${icon}.png`} alt="icon"/> <br/>
                    {description}
                </Li>
                Temperature: {temperature}&#176;C <br/>
                Wind speed: {wind} m/s
            </Ul>

        );
    }
}
}