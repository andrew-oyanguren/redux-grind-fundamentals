import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(currentState) {
      currentState.counter++;
    },
    decrement(currentState) {
      currentState.counter--;
    },
    increase(currentState, action) {
      currentState.counter = currentState.counter + action.payload;
    },
    toggleCounter(currentState) {
      currentState.showCounter = !currentState.showCounter;
    }
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;