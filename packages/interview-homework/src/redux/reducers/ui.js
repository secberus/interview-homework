/**
 * @file reducers/ui.js
 */
import produce from 'immer';

const initialState = {
  oranges: []
}

const UIReducer = produce((state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
})

export default UIReducer;