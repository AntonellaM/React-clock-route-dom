import React from 'react';
import './App.css';

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
          hour: new Date().getHours(),
          min: new Date().getMinutes(),
          sec: new Date().getSeconds(),
        }
    this.updateClock = this.changeClock.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.updateClock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeClock() {
    this.setState({
          hour: new Date().getHours(),
          min: new Date().getMinutes(),
          sec: new Date().getSeconds(),
        });
  }

  render() {
    return(
      <p>{this.state.hour}:{this.state.min}:{this.state.sec}</p>
    );
  }
}

export default Clock;
