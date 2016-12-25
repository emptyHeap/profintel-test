import React from 'react'

export default class Character extends React.Component {
  static get defaultProps() {
    return {
      consumed: 0,
    }
  }
  startAnimation(interval) {
    const {view} = this.state;
    let {time, multiplier} = this.state.animation;
    this.animationInterval = setInterval(() => {
        //animation math
        time += interval * multiplier;
        view.leftEyeRadius = 3*Math.sin(time/70) + 4;
        view.rightEyeRadius = 1.6*Math.cos(time/70) + 3;
        view.mouthRadius = 4*Math.sin(time/320) + 5;
      this.setState({
          view
      });
    }, interval);
  }
  stopAnimation() {
    clearInterval(this.animationInterval);
  }
  grow(amount) {
    let {consumed} = this.state;
    consumed += amount;

    this.setState({
        consumed
    });
  }
  constructor(props) {
    super(props)
    this.state = {
      animation: {
        time: 0,
        multiplier: 0.4
      },
      view: {}
    }
  }
  componentDidMount() {
    this.startAnimation(25);
  }
  componentWillUnmount() {
    this.stopAnimation();
  }
  render() {
    const {view} = this.state;
    const {consumed} = this.props;
    const size = (consumed + 12)/60*100;

    return (
      <svg style={{overflow: 'visible', zIndex: 10}} viewBox="0 0 60 60" width={`${size}%`} height={`${size}%`}>
        <g>
          <ellipse
             stroke="#000000"
             strokeWidth="1.5"
             strokeLinecap="butt"
             fill="#669f35"
             id="path3467"
             cx="30"
             cy="30"
             rx="29"
             ry="29" />
          <ellipse
             stroke="#000000"
             strokeWidth="1.5"
             strokeLinecap="butt"
             fill="#888888"
             id="path3461"
             cx="47"
             cy="34"
             rx={view.mouthRadius}
             ry={view.mouthRadius} />
          <ellipse
             stroke="#000000"
             strokeWidth="1.5"
             strokeLinecap="butt"
             fill="#f63f35"
             id="path3467"
             cx="44"
             cy="10"
             rx={view.rightEyeRadius}
             ry={view.rightEyeRadius} />
          <ellipse
             stroke="#000000"
             strokeWidth="1.5"
             strokeLinecap="butt"
             fill="#668000"
             id="path3469"
             cx="26"
             cy="11.7"
             rx={view.leftEyeRadius}
             ry={view.leftEyeRadius} />

        </g>
      </svg>
    )
  }
}

