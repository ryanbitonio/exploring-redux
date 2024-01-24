import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
  counter: 0,
};

const incrementCounter = () => ({
  type: INCREMENT,
});

const decrementCounter = () => ({
  type: DECREMENT,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, counter: state.counter + 1 };
    }
    case DECREMENT: {
      return { ...state, counter: state.counter - 1 };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());

unsubscribe();
