import React, {Component} from 'react';
import './Forecast1Day.css';

class Forecast1Day extends Component {
    render() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return (
            <div className="Forecast1Day">
                <h1>{days[this.props.day]}</h1>
                <img src={require(`../../icons/${this.props.icon}.png`)} className="icon-weather" alt="weather"/>
                <div className="weather-details">
                    <span className="weather-temperatura">{this.props.temp + 'º'}</span>
                    <span>{this.props.desc}</span>
                </div>
            </div>
        );
    }
}

export default Forecast1Day;