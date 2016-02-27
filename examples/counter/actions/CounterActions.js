import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

let fileName = 'CounterActions';

export function increment() {
  console.log('executing action increment');
  return {
    name: fileName+'.increment', 
    type: INCREMENT_COUNTER,
    //params: JSON.stringify(Array.prototype.slice.apply(arguments))
  };
}

export function decrement() {
  console.log('executing action decrement');
  return {
    name: fileName+'.decrement', 
    type: DECREMENT_COUNTER,
    //params: JSON.stringify(Array.prototype.slice.apply(arguments))
  };
}

export function incrementIfOdd() {
  console.log('executing action incrementIfOdd');
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch({
      name: fileName+'.incrementIfOdd', 
      type: INCREMENT_COUNTER,
      //params: JSON.stringify(Array.prototype.slice.apply(arguments))
    });
  };
}

export function incrementAsync() {
  console.log('executing action incrementAsync');
  return dispatch => {
    setTimeout(() => {
      dispatch({
        name: fileName+'.incrementAsync', 
        type: INCREMENT_COUNTER,
        //params: JSON.stringify(Array.prototype.slice.apply(arguments))
      });
    }, 1000);
  };
}
