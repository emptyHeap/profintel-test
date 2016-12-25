import React from 'react'
import color from 'color'

export default class Food extends React.Component {
  startAnimation(interval) {
    const {view} = this.state;
    const {amount} = this.props;
    const {multiplier} = this.state.animation;
    let {time} = this.state.animation;

    this.animationInterval = setInterval(() => {
        //animation math
        time += interval * multiplier;
        view.radius = Math.sqrt(amount)/2*Math.sin(time/120) + amount*1.4;

        const {width, offset} = this.props.color;
        view.color = color.rgb(
          Math.sin(time/100)*width + offset,
          Math.sin(time/100 + Math.PI/3)*width + offset,
          Math.sin(time/100 + Math.PI*2/3)*width + offset
        )
      this.setState({
          view
      });
    }, interval);
  }
  stopAnimation() {
    clearInterval(this.animationInterval);
  }
  static get defaultProps() {
    return {
      amount:1,
      color: {
        width: 120,
        offset: 120
      }
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      animation: {
        time: 0,
        multiplier: 0.4
      },
      view: {
        redius: props.amount * 1.4
      }
    }
  }
  componentWillMount() {
    this.startAnimation(25);
  }
  componentWillUnmount() {
    this.stopAnimation();
  }
  render() {
    const {view} = this.state;
    return (
      <svg style={{zIndex: 11}} viewBox="0 0 60 60" width="100%" height="100%">
        <g>
          <ellipse
             stroke="#000000"
             strokeWidth="1"
             strokeLinecap="butt"
             fill={view.color}
             id="path3469"
             cx="30"
             cy="30"
             rx={view.radius}
             ry={view.radius} />
        </g>
      </svg>
    )
  }
}

