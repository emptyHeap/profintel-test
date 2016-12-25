import React from "react"
import Devourer from "./components/devourer.jsx"
import Field from "./components/field.jsx"
import Food from "./components/food.jsx"
import ReactDOM from "react-dom"

let field;
function handleKeyDown(event) {
  console.log(event);
  switch (event.code) {
    case 'ArrowLeft':
      field.moveCharacter({x: -1, y: 0});
      break;
    case 'ArrowRight':
      field.moveCharacter({x: 1, y: 0});
      break;
    case 'ArrowUp':
      field.moveCharacter({x: 0, y: -1});
      break;
    case 'ArrowDown':
      field.moveCharacter({x: 0, y: 1});
      break;
  }
}
document.onkeydown = handleKeyDown;

ReactDOM.render(
  <Field size={{x:15, y:15}} ref={(_field) => field = _field} />,
  document.getElementById('root')
)
