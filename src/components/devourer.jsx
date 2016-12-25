import React from 'react'

export default class Character extends React.Component {
  startAnimation(interval) {
    const {view} = this.state;
    let {time, multiplier} = this.state.animation;
    this.animationInterval = setInterval(() => {
        //animation math
        time += interval * multiplier;
        view.leftEyeRadius = 3*Math.sin(time/700) + 4;
        view.rightEyeRadius = 1.6*Math.cos(time/700) + 3;
        view.mouthRadius = 6*Math.sin(time/120) + 10;
      this.setState({
          view
      });
    }, interval);
  }
  stopAnimation() {
    clearInterval(this.animationInterval);
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
    return (
      <svg>
        <g>
          <ellipse
             stroke="#000000"
             strokeWidth="1.5"
             strokeLinecap="butt"
             fill="#888888"
             id="path3461"
             cx="47"
             cy="34"
             rx={view.mouthRadius}
             ry={view.mouthRadius}>
            <ellipse
               stroke="#000000"
               strokeWidth="1.5"
               strokeLinecap="butt"
               fill="#f63f35"
               id="path3467"
               cx="47"
               cy="34"
               rx={view.rightEyeRadius}
               ry={view.rightEyeRadius} />
             </ellipse>
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

