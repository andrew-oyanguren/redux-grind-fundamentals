import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/slices/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector((state) => state.counterSlice.counter);
  const showCounter = useSelector((state) => state.counterSlice.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;



/*

Here we will subscribe to our Redux Store.

Component Functionality: We want to do a couple things with store:

1) output our current store counter

=== Importing Store ===

React-redux includes hooks we can use to work with redux. The one we want to import with is useSelector.

useSelector(): Gives us direct access to the store, and select a certain part of that store, certain state property.

=== Using useSelector ===

UseSelector method accept an arrow function, and that function receieves the redux 'state',
as an argument, and then we return the part of the state in which we want to exstract.

* NOTE: React-Redux does all the work for us, it passes in our store state data,
and returns us that data in which we return in our function.

Then you can store that returned value into a constant.

* NOTE: When you use useSelector, react-redux will automatically set up a subscription to that data in your store.

=== using useDispatch ===

useDispatch() method allows is to create a dispatch object we can use in our component to dispatch an action to the store.

* NOTE: You need to create the constant when calling it.

=== Attaching Payloads to Actions ===

I reality, you often want to send payloads with actions.

*/