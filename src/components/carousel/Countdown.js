import React, { Component } from "react";

export class Countdown extends Component {
  state = {
    deadline: "Aug, 2, 2019",
    countdownTime: [
      {
        type: "days",
        value: 0
      },
      {
        type: "hours",
        value: 0
      },
      {
        type: "mins",
        value: 0
      },
      {
        type: "secs",
        value: 0
      }
    ]
  };

  timeCountdownHandler = () => {
    const { deadline, countdownTime } = this.state;
    const timeUntils = Date.parse(deadline) - Date.parse(new Date());
    const getTimeUntils = this.timeParser(timeUntils);
    const typeDefault = ["days", "hours", "mins", "secs"];
    for (let i = 0; i < countdownTime.length; i++) {
      const stateCopy = Object.assign({}, this.state);
      stateCopy.countdownTime = stateCopy.countdownTime.slice();
      stateCopy.countdownTime[i] = Object.assign(
        {},
        stateCopy.countdownTime[i]
      );
      stateCopy.countdownTime[i].value = getTimeUntils[i];
      stateCopy.countdownTime[i].type =
        getTimeUntils[i] > 1 ? typeDefault[i] : typeDefault[i].slice(0, -1);
      this.setState(stateCopy);
    }
  };

  timeParser = timeUntils => {
    const secs = Math.floor(timeUntils / 1000) % 60;
    const days = Math.floor(timeUntils / (1000 * 24 * 60 * 60));
    const hours = Math.floor(timeUntils / (1000 * 60 * 60)) - days * 24;
    const mins =
      Math.floor(timeUntils / (1000 * 60)) - days * 24 * 60 - hours * 60;
    return [days, hours, mins, secs];
  };

  componentDidMount() {
    const intervalId = setInterval(this.timeCountdownHandler, 1000);
    this.setState({ ...this.state, intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { countdownTime } = this.state;
    return (
      <div className="countdown_wrapper">
        <div className="countdown_top"> EVENT START IN </div>
        <div className="countdown_bottom">
          {countdownTime.map((time, index) => (
            <div className="countdown_time" key={index}>
              <div className="countdown_item"> {time.value} </div>
              <div className="countdown_tag">{time.type} </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Countdown;
