import React from "react";

class Clock extends React.Component {
  state = { time: "Loading..." };

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  padWithZero = (time) => {
    if (time < 10) {
      time = `0${time}`;
    };
    return time;
  };

  formatTime = (hours, minutes, seconds) => {
    let formattedHours = ( hours > 12 ) ? this.padWithZero(hours - 12) : this.padWithZero(hours);
    let formattedMinutes = this.padWithZero(minutes);
    let formattedSeconds = this.padWithZero(seconds);

    return {formattedHours, formattedMinutes, formattedSeconds}
  };
  

  fetchTime = () => {
    let currentTime = new Date();

    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    const timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

    const {
      formattedHours,
      formattedMinutes,
      formattedSeconds } = this.formatTime(currentHours, currentMinutes, currentSeconds);
    
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${timeOfDay}`;
  };

  updateTime = () => {
    const fullTime = this.fetchTime();
    this.setState({ time: fullTime });
  }

  render() {
    return (
      <div className="container">
        <div className="time">{this.state.time}</div>
      </div>  
    )
  };
};

export default Clock;
