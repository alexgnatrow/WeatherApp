import React from 'react';
import { connect } from 'react-redux';

import CityList from './CityList';
import WeatherDay from '../components/WeatherDay';
import { Wrapper,Header,Ul,Input, Button } from '../components/styles';
import { fetchCityWeather } from '../actions/actions';

class WeatherApp extends React.Component {

// Helper functions
    handleChange(e){
        this.setState({inputValue:e.target.value,});
        console.log(this.state);
    }
    addCity(){


        //motivation. Don`t forget to delete!!!
        const workEl = document.getElementById('state');
        if(!this.props.willItWork)  workEl.innerHTML = 'Put your shit together!';

        if(this.state.inputValue){
        fetchCityWeather(this.state.inputValue);
        console.log(this.state.inputValue);} else {console.log('No null here, kid. Get out of here.');}

    }
    clear(){
        this.setState({cities:[], inputValue: ''});
    }
render(){
    return(
        <Wrapper>
            <Header>
                Weather App is running
            </Header>
            <Ul>
            <WeatherDay name={'firstCity'}> </WeatherDay>
            <WeatherDay name={'secondCity'}> </WeatherDay>
            <WeatherDay name={'thirdCity'}> </WeatherDay>
            </Ul>
            <Input onChange={this.handleChange.bind(this)}/>
            <Button onClick={this.addCity.bind(this)}>Add</Button>
            <Button onClick={this.clear.bind(this)}>Clear</Button><br></br>
            <CityList>            </CityList>
            <h1 id={'state'}>Ok lets go</h1>
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

export default connect(mapStateToProps, {})(WeatherApp);






