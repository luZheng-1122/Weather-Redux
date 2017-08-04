import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {

    //每一个call的变量都是一个single city
    renderWeather(cityData = []) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log(temps);

        return ( 
            <tr>
                <td>{name}</td>
                <td>
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </td>
            </tr>
        );
        
    }

    render() {
        // if(this.props.weather.length == 0) {
        //     return (<div>no weather</div>);
        // }

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* weather 的每一项是一个city */}
                      {this.props.weather.map(this.renderWeather)} 
                </tbody>
            </table>
        );
    }
}

//state is global application state
//weather is an array of all cities that users have searched
function mapStateToProps(state) {
    console.log(state.weather);
    return { weather: state.weather };
}


export default connect(mapStateToProps)(WeatherList);