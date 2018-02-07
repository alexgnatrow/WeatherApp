import React from 'react';
import { connect } from 'react-redux';

import CityList from './CityList';
import CityWeather from '../components/CityWeather';
import { Wrapper,Header,Ul,Input, Button } from '../styles';
import {
    fetchCityWeather, setInputValue,
    deleteCity, getCity, clear } from '../actions/actions';

class WeatherApp extends React.Component {

    //handle change of input by storing the value
    handleChange = (e) => {
        this.props.setInputValue(e.target.value);
    };

    addCity = () =>{
        try {
            this.props.fetchCityWeather(this.props.inputValue);
        } catch (e){
            console.log('ADD_CITY_ERROR: ', e.message,
                '| value: ', this.props.inputValue);
        }
    };



render(){
    // const input = document.getElementById('myInput');
    // input.addEventListener('keyup', function(e){
    //     e.preventDefault();
    //     if(e.keyCode === 13){
    //         document.getElementById('addButton').click();
    //     }
    // });
    return(
        <Wrapper>
            <Header>Weather App is running</Header>
            <Ul>
            <CityWeather name={'CityWeather'}
                         current={this.props.current} />
            </Ul>
            <Input id="myInput"
                   onChange={this.handleChange}
                   value={this.props.inputValue}/>

            <Button id="addButton"
                    onClick={this.addCity}>Add</Button>

            <Button onClick={this.props.clear}>Clear</Button>

            <CityList data={this.props.data}
                      fetchCityWeather={this.props.fetchCityWeather}
                      deleteCity={this.props.deleteCity}
                      getCity={this.props.getCity}  />
        </Wrapper>
        );
    }

}

function mapStateToProps(state) {
    return {
        data: state.data,
        current: state.current,
        inputValue: state.inputValue,
    };
}


export default connect(mapStateToProps, {fetchCityWeather,
     deleteCity, getCity, setInputValue, clear })(WeatherApp);






