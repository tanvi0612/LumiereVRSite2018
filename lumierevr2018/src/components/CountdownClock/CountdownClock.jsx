import React, { Component } from "react";
import moment from "moment";

// Import Styles
import "./CountdownClock.css";

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: {
        months: "",
        days: "",
        h: "",
        m: "",
        s: "",
        interval: function() {}
      },
      startDate: new moment(),
      min: new Date(),
      startTimer: false
    };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.state.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    this.state.interval && clearInterval(this.state.interval);
  }

  tick() {
    if (
      typeof this.props.endDate === typeof new Date() &&
      this.props.endDate.isValid()
    )
      this.afterEachSecond(this.props.endDate);
    else console.error("Invalid EndDate");
  }
  afterEachSecond(endDate) {
    var temp = { months: "", days: "", h: "", m: "", s: "" };
    var now = moment(); // today's date
    var end = moment(endDate); // end date
    var duration = moment.duration(end.diff(now));

    if (duration.asSeconds() >= 0) {
      if (Math.floor(duration.asMonths()) > 0) {
        if (Math.floor(duration.asMonths()) < 10) {
          temp.months = "0" + Math.floor(duration.asMonths());
        } else {
          temp.months = Math.floor(duration.asMonths());
        }
      }
      if (Math.floor(duration.asDays()) > 0) {
        if (Math.floor(duration.days()) < 10) {
          temp.days = "0" + Math.floor(duration.days());
        } else {
          temp.days = Math.floor(duration.days());
        }
      }
      if (Math.floor(duration.asHours()) > 0) {
        if (Math.floor(duration.hours()) < 10) {
          temp.h = "0" + Math.floor(duration.hours());
        } else {
          temp.h = Math.floor(duration.hours());
        }
      }
      if (Math.floor(duration.asMinutes()) > 0) {
        if (Math.floor(duration.minutes()) < 10) {
          temp.m = "0" + Math.floor(duration.minutes());
        } else {
          temp.m = Math.floor(duration.minutes());
        }
      }
      if (Math.floor(duration.asSeconds()) > 0) {
        if (Math.floor(duration.seconds()) < 10) {
          temp.s = "0" + Math.floor(duration.seconds());
        } else {
          temp.s = Math.floor(duration.seconds());
        }
      }
    }
    this.setState({
      timeRemaining: temp
    });
  }
  render() {
    return (
      <div className="timer">
        {this.state.timeRemaining.months && (
          <div className="section">
            <div className="time">{this.state.timeRemaining.months}</div>
            <div className="label">Months</div>
          </div>
        )}
        {this.state.timeRemaining.days && (
          <div className="section">
            <div className="time">{this.state.timeRemaining.days}</div>
            <div className="label">Days</div>
          </div>
        )}
        {this.state.timeRemaining.h && (
          <div className="section">
            <div className="time">{this.state.timeRemaining.h}</div>
            <div className="label">Hours</div>
          </div>
        )}
        {this.state.timeRemaining.m && (
          <div className="section">
            <div className="time">{this.state.timeRemaining.m}</div>
            <div className="label">Minutes</div>
          </div>
        )}
        {this.state.timeRemaining.s && (
          <div className="section">
            <div className="time">{this.state.timeRemaining.s}</div>
            <div className="label">Seconds</div>
          </div>
        )}
      </div>
    );
  }
}

export default CountdownTimer;
