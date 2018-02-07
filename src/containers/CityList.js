import React from 'react';

import { Ulist, ListItem, Button2, ListItemWrapper } from '../styles';

export default class CityList extends React.Component{

    render(){
        const citiesArr = this.props.data.map((city)=> {
            if(city !== undefined){
                return city.name;
            } else {
                return console.log('fuck this');
            }
        });
        const getCity = this.props.getCity;
        const deleteCity = this.props.deleteCity;
        return(
        <Ulist>

            {citiesArr.map((city, index)=>{
                return (
                    <ListItemWrapper key={index}>
                        <ListItem  onClick={()=> getCity(city)}>
                                    {city.toString()}
                        </ListItem>
                        <Button2 onClick={()=> deleteCity(city)}>X</Button2>
                    </ListItemWrapper>
                );
            })}

        </Ulist>
        );
    }
}
