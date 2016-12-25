import * as types from '~/constants/CharacterActionsTypes.js'

const initialState = {
  mass: 0,
  position {
    x = 0,
    y = 0
  }
}

export default function character(state = initialState, action) {
  switch (action.type) {
    case types.MOVE_CHARACTER:
      // wrong?
      // state.position = action.offset.map((offsetValue, idx) => state.position[idx] + offsetValue);
      position = action.offset.map((offsetValue, idx) => state.position[idx] + offsetValue);
      return {
        mass: state.mass,
        position
      }
  }
}
