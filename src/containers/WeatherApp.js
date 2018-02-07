import React from 'react';
import { connect } from 'react-redux';

import CityList from './CityList';
import CityWeather from '../components/CityWeather';
import { Wrapper,Header,Ul,Input, Button } from '../styles';
import { fetchCityWeather, addCityToTheList, setInputValue, deleteCity, clear } from '../actions/actions';

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
            <CityWeather name={'CityWeather'} data={this.props.data} />
            </Ul>
            <Input id="myInput" onChange={this.handleChange}/>

            <Button id="addButton"
                    onClick={this.addCity} >Add</Button>

            <Button onClick={this.props.clear}>Clear</Button>

            <CityList cities={this.props.cities}
                      fetchCityWeather={this.props.fetchCityWeather}
                      deleteCity={this.props.deleteCity} />
        </Wrapper>
        );
    }

}

function mapStateToProps(state) {
    return {
        cities: state.cities,
        inputValue: state.inputValue,
        willItWork: state.willItWork
    };
}


export default connect(mapStateToProps, {fetchCityWeather,
    addCityToTheList, deleteCity, setInputValue, clear })(WeatherApp);






