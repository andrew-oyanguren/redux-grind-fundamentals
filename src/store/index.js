import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/auth-slice';
import authReducer from './slices/auth-slice';

const store = configureStore({
  reducer: { counterSlice: counterReducer, authSlice: authReducer }
});

export default store;


/*

// ===== Store Notes ===== //

state updates: even when you are only updating one part of the state,
you still need to include the other properties of state in you returned snapshot,
because React will not do that automatically for you.

* NOTE: The returned state snapshots will not 'merge' with existing state,
but it will 'overwrite' the existing state.

** IMPORTANT: You must NEVER change the existing state, you must always return a new snapshot,
because it can lead to bugs, and have unwanted sideffects.



// ==== Use a Slice ==== //

First we can store our createSlice into a slice constant.

.reducer: inside our createStore() function we can pass in our slice.reducer,

.reducer gives us access to our reducers in our slice state.

=== Multiple Reducers ===

Toolkit makes it easy for us to handle multiple slice reducers on our store function.

== Configure Store ==

Like createStore, it creates a store, but it makes handling multiple reducers easier.

Configure store gets called, and (inside of it) it gets passed a configuration Object.

CONFIGURE_OBJECT: Gets passed a 'reducer' property.

Singular, as store always wants one returned value.

REDUCER: The value of Reducer can be a single reducer or an object, 
and in that object we can setup any keys of our choice, 
and pass our reducers as values. We are creating a map of our reducers.
* And behond the scenes configurStore will merge those all together into one big reducer.



// ==== Dispatch Actions ===== //

For dispatching actions, createSlice() automatically creates unique action identifiers for our reducer methods.

== slice.actions: ==

We can access these identifiers with slice.actions.

.actions: Is an object where the key names match the names of our reducer methods inside the createSlice function, in the reducers section.

=== How It Works ===

.action.methods: We access those keys, but they are not pointing to the actual methods we created in our reducers object, 
but instead we get methods that were created by Toolkit, that when called will create action objects for us.

* NOTE: So we dont have to create our own action-objects, we just execute these actions creator methods, 
and they auto create the action-objects for us.

Then you can store the slice.actions in an actions constant and export that const into the file where you need that slice.

=== using Actions ===

In the component you import actions to, you can acess the methods by passing actions.method() into the dispatch function.

PAYLOAD: createSlice() auto creates you action object and anything you pass into your actions.metho() function, 
will be stored in a 'payload' property.



// ===== Multiple Slices ===== //

* NOTE: We want to seperate out concerns. Where each slice focuses on one task.
So we should create another slice.

* NOTE: When getting data from store, using useSlice(), your drilling path has changed with adding a reducer object to your 
store configuration object. 

ForExample: (state) => state.sliceName.stateName


// ===== Splitting Code ===== //

When using redux/toolkit it makes sense to put every slice of our state into it's own file. Keeping a clean store file.

*/