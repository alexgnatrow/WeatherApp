import React from 'react';
import { connect } from 'react-redux';

class CityList extends React.Component{

    render(){
        return(
        <div>


        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cities: state.cities,
    };
}

export default connect(mapStateToProps, {})(CityList)