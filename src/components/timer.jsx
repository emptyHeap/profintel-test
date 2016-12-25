import React from 'react'
import color from 'color'

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        time: 60
    };
  }
  startAnimation(interval) {
    this.animationInterval = setInterval(() => {
      let {time} = this.state;
      time -= 1;

      if (time <= 0) {
        this.stopAnimation();
        this.props.timerEnded();
      }

      this.setState({
          time
      });
    }, 1000);
  }
  stopAnimation() {
    clearInterval(this.animationInterval);
  }
  componentWillMount() {
    this.startAnimation();
  }
  componentWillUnmount() {
    this.stopAnimation();
  }
  render() {
    const {time} = this.state;

    return (
      <h2>
        {time}
      </h2>
    )
  }
}

