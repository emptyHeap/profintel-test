import React from 'react'
import ReactDOM from 'react-dom'
import color from 'color'

import Character from '~/components/character.jsx'
import Food from '~/components/food.jsx'
import Timer from '~/components/timer.jsx'

class FieldRow extends React.Component {
  static get key() {
    this.key++;
    return this.key;
  }
  render() {
    return <div key={this.num++} className='field_row'>{this.props.children}<br style={{clear: 'both'}} /></div>
  }
}

class FieldCell extends React.Component {
  static get defaultProps() {
    return {
      width: 60,
      height: 60,
      backgroundColor: color.rgb(80,141,90),
      content: 'o',
      color: {
        width: 120,
        offset: 120
      }
    }
  }
  randomColor() {
    const {offset, width} = this.props.color;
    return color.rgb(
      Math.random()*width + offset,
      Math.random()*width + offset,
      Math.random()*width + offset)
  }
  render() {
    const {width, height, backgroundColor, cWidth} = this.props;
    const style = {
      width,
      height,
      backgroundColor,
      float: 'left',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      owerflow: 'show'
    }

    return <div style={style} className='field_cell'>{this.props.children}</div>
  }
}

export default class Field extends React.Component {
  static get defaultProps() {
    return {
      width: 60,
      height: 60,
      size: {
        x: 10,
        y: 10
      }
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      characterPosition: {
        x:0,
        y:0
      },
      foodPosition: {
        x:1,
        y:1
      },
      devourer: <Character />,
      food: <Food amount={3} />
    }
  }
  checkCollision() {
    const {x, y} = this.state.characterPosition;
    const {foodPosition} = this.state;
    const {devourer, food} = this.state;

    if (x == foodPosition.x && y == foodPosition.y) {
      this.setState({
          devourer: <Character consumed={devourer.props.consumed + food.props.amount} />
      });
      this.spawnAnotherFood();
    }
  }
  spawnAnotherFood() {
    const {size} = this.props;

    this.setState({
        foodPosition: {
          x: Math.floor(Math.random()*size.x),
          y: Math.floor(Math.random()*size.y)
        },
        food: <Food amount={Math.floor(Math.random()*3) + 1} />
    });
    this.checkCollision();
  }
  moveCharacter(offset) {
    const {size} = this.props;
    let {x, y} = this.state.characterPosition; //+ offset;
    const {foodPosition} = this.state;

    x += offset.x;
    if (x < 0) x = 0
    else if (x >= size.x) x = size.x - 1

    y += offset.y;
    if (y < 0) y = 0
    else if (y >= size.y) y = size.y - 1

    this.setState({
        characterPosition: {
          x,
          y
        }
    });

    this.checkCollision();
  }
  gameFinished() {
    const {devourer} = this.state;

    console.log(devourer);
    alert(`game finished with stat: ${devourer.props.consumed}`);
  }
  render() {
    const {size, height, width} = this.props;
    const cellStyle = {
      height,
      width,
      float: 'left'
    }
    const rowStyle = {

    }

    let cols = [];
    let rows = [];

    for (let y = 0; y < size.y; y++) {
      let cells = [];
      for (let x = 0; x < size.x; x++) {
        cells.push(<FieldCell key={x + y*size.y} />)
      }
      rows.push(<FieldRow key={y}>{cells}</FieldRow>);
    }

    const {characterPosition, foodPosition} = this.state;

    {
      const {x, y} = foodPosition;
      const {food} = this.state;
      rows[y].props.children[x] = <FieldCell key={x + y*size.y}>{food}</FieldCell>;
    }

    {
      const {x, y} = characterPosition;
      const {devourer} = this.state;
      rows[y].props.children[x] = <FieldCell key={x + y*size.y}>{devourer}</FieldCell>;
    }

    return (
      <div key="0" className='field'>
        {rows}
        <Timer timerEnded={this.gameFinished.bind(this)} />
      </div>
    )
  }
}

