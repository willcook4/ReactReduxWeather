import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]); // concat is not a mutation, not an edit to state. Never edit state
      return [ action.payload.data, ...state ]; // ES6
  }
  return state;
}