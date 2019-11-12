import React from 'react';
import './App.css';
import Forecast from "./Forecast/Forecast";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Forecast />
                <img src={require('./icons/7.png')} />
            </div>
        );
    }

}

export default App;
