import React from "react"
import ReactDOM from "react-dom"

import Field from "~/components/field.jsx"

let field;
function handleKeyDown(event) {
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
  <Field size={{x:5, y:5}} ref={(_field) => field = _field} />,
  document.getElementById('root')
)

