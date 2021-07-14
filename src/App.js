import { useSelector } from 'react-redux';

import { Fragment } from 'react';


import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {

  const isAuthenticated = useSelector((state) => state.authSlice.isAuthenticated)

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;






/*

// ===== REDUX ===== //

Redux: A state management system for cross-component or app-wide state.



=== Three Kinds of Sate ===

1) Local State
2) Cross-Component State
3) App-Wide State

1) === LOCAL_STATE: 

State that belongs to a single component.

FOR_EXAMPLE: Getting Input data, and handling it in the same component.

HOW_ITS_MANAGED: 

1) useState
2) useReducer


2) === CROSS_COMPONENT_STATE:

State that effects multiple components.

FOR_EXAMPLE: A button that opens/closes state of a modal overlay.

HOW_ITS_MANAGED: (prop-chains)

1) useState
2) useReducer
3) Props (required)


3) === APP_WIDE_STATE:

State that affects the entire app (most/all components).

FOR_EXAMPLE: The User Suthentication State, needed for changing login satus, navigation inside header, and page itself.

1) useState
2) useReducer
3) Props (prop-chaining)



=== Problem ===

Redux allows you to avoid long propchaining.

** NOTE: You can use both useContext and redux in your app.
Redux to manage overall app, and context for states in parts of your app.

** IMPORTANT: useContext: Is not that great for 'high-frequency' changes; State that changes a lot.




// ===== How Redux Works ===== //

Redux is all about having ONE Central Data (state) Store, in your application.

=== ONE_STORE ===

Components set up subscriptions to the store.

** IMPORTANT: Components NEVER directly manipulate the 'store' data,
Instead we have Reducer Functions that are responsible for manipulating the store data.

=== Reducer Function ===

* NOTE: not the useReducer hook, a simple reducer function that takes in data, and returns a new result.

=== Actions ===

Components trigger 'Actions' like clicking a button.

An Action is an object that describes the kind of operation the reducer should perform.

The action is dispatched to the reducer function, the reducer reads the action,
applies changes, and returns a new state to the Central Store.



// ===== Using Redux ===== //

Installing react-redux:

Remember Redux is not React specific, it doesnt care what library you are using, 
and with that said, the React team has created a react-redux package to help us redux in React apps.

=== Storing Store ===

Just like context, create a store folder as a sub folder to the src,
and create an index.js/store.js to create your root store file, inside of it.


// ===== Providing Store to our App ===== //

Inside the indexJS, we want to import two things:

1) Provider Component
2) Our Redux Store

1) on the provider, we want to add the store prop/attr, and point to our store.



// ===== ReduxToolkit ===== //

Problems with vanilla REDUX:

1.) name clashing / wrong identifiers:

On larger projects with many developers working together you can have name clashes,
as well as typos that can lead to errors, not easily noticable on large applications.

2.) Amount of Data: 

The more data we have, the more we have to copy when we return our state snapshot,
and this can lead to huge store files.

3.) State Immutability: 

It's easy to mes this up on larger projects, with nested data etc.


=== ReduxJS/Toolkit ===

Library/extension Developed by team responsible for react-redux.

* NOTE: ReduxJS/Toolkit simplifies react working with redux.

=== Using Toolkit ===

1.) === createSlice Function:

With createSlice we are able to prepare a slice of our global state,
and when we have multiple parts of a larger state that are unrelated, 
createSlice() allows us to create parts of our redux state in seperate files!

CREATE_SLICE wants an Object as an argument.

create slice Object:

1) NAME: Every slice needs a name property.
2) INITIAL_STATE: Then you need an initial state,
3) REDUCERS: an object (map) of all the reducers this slice needs.

=== Reducers ===

Your reducer methods take in a (currentState) argument.

Inside the reducer code-block: We can directly manipulate the state, unlike in regular redux.

* This is because toolkit internally uses IMMER, an internal package,
and IMMER will automatically clone the existing state, and overwrite it correctly
in the background.

PAYLOAD: the reducer method does still recieve an action payload as a second argument, if needed.


*/