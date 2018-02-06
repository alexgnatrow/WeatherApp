import React from 'react';

import { Ulist, ListItem, Button2, ListItemWrapper } from '../styles';

export default class CityList extends React.Component{

    render(){
        const citiesArr = this.props.cities;
        //     this.props.data.map(function(city){
        //     if(city !== undefined){
        //         return city.name;
        //     } else {
        //         return console.log('fuck this');
        //     }
        // });
        const fetchCityWeather = this.props.fetchCityWeather;
        const deleteCity = this.props.deleteCity;
        return(
        <Ulist>

            {citiesArr.map(function(city, index){
                return (
                    <ListItemWrapper key={index}>
                        <ListItem  onClick={()=> fetchCityWeather(city)}>
                                    {city}
                        </ListItem>
                        <Button2 onClick={()=> deleteCity(city)}>X</Button2>
                    </ListItemWrapper>
                );
            })}

        </Ulist>
        );
    }
}
