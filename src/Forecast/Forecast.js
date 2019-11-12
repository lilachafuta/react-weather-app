import React, {Component} from 'react';
import './Forecast.css';
import Forecast1Day from "./Forecast1Day/Forecast1Day";

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast : []
        };
    }
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/evyros/react-weather-app/forecast')
            .then(res => res.json())
            .then(forecast => {
                this.setState({forecast});
            });
    }

    render() {
        return (
            <div className="Forecast">
                    {this.state.forecast.map(weather => {
                        return <div>
                            <Forecast1Day
                                day={weather.day}
                                icon={weather.icon}
                                temp={weather.temperature}
                                desc={weather.description}/>
                        </div>
                    })}
            </div>
        );
    }
}

export default Forecast;