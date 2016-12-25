import * as actions from '~/constants/CharacterActions.js'
import * as directions from '~/constants/Directions.js'

export function pushCharacter(direction) {
  let offset;

  switch(direction) {
    case directions.LEFT:
      offset = {
        x: -1,
        y: 0
      }
      break;
    case directions.RIGHT:
      offset = {
        x: 1,
        y: 0
      }
      break;
    case directions.TOP:
      offset = {
        x: 0,
        y: -1
      }
      break;
    case directions.BOTTOM:
      offset = {
        x: 0,
        y: 1
      }
      break;
  }

  return moveCharacterBy(offset);
}

export function moveCharacterBy(offset) {
  return {
    type: actions.MOVE_CHARACTER,
    offset
  }
}
