import React from 'react'
import color from 'color'

export default class Character extends React.Component {
  startAnimation(interval) {
    const {view} = this.state;
    const {amount} = this.props;
    const {multiplier} = this.state.animation;
    let {time} = this.state.animation;

    setInterval(() => {
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
  componentDidMount() {
    this.startAnimation(25);
  }
  render() {
    const {view} = this.state;
    return (
      <svg>
        <g>
          <ellipse
             stroke="#000000"
             strokeWidth="1"
             strokeLinecap="butt"
             fill={view.color}
             id="path3469"
             cx="26"
             cy="51"
             rx={view.radius}
             ry={view.radius} />
        </g>
      </svg>
    )
  }
}

