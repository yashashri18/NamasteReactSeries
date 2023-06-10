In this episode we learned about 

- how to manage data very efficiently in our application
- Redux library - to manage data layer of application
- previously we used UseContext to avoid prop drilling(Context is the central place where the data is present and any compoenent can read and update data)
- when our application has a large scope, it needs multiple contexts so instead of creating multiple contexts we can use a redux store
- use Context for smaller projects and use redux for larger projects
- there are multiple alternatives for redux eg : ngrx 
- Redux library has some concers (complex configuration, too much boilerplate code , lots of packages, etc)
- hence we used Redux toolkit(it is a package intended to be std way to write Redux logic)
- redux store is a global thing , can be accessed from anywhere in the app
- everything is put in single store 
- store have slices (logical separation for different functionalities - eg user, cart in ecommerce website etc)
- components can not directly modify the store (need to dispath an action to modify the sore)
- action calls a function and the function will modify data
- the function is known as reducer


to write/update something in store - if we click in submit button , it will dispatch an action which will call the reducer function which will update the slice in the store

to read something from the store - using useSelector(hook)
 
![](./Code/src/assets/img/redux-store.png)

refer 
https://redux.js.org/
https://redux-toolkit.js.org/


need to install 2 libraries 
1. redux toolkit (core redux functionalities)
2. redux-react (bridge between redux and react)

Working with redux-toolkit
1. Create store using {configureStore} - utils/store.js
2. Provide store to whole app in (provide in root component App) using Provider component
3. create slices for the store - cartSlice.js in our App using {createSlice}
- create slice with name, initial state, reducers object (actions takes two parameters - state -> current state and action payload -> data coming in)
- reducers functions do not return anything , they take the state and directly modify it
- export actions and reducer from the slice
4. Put slice inside store
    reducer:{
        cart: cartSlice,
    }
- reducer object contains multiple reducers 
- cart is the name of slice and cartSlice is the slice
5. Subscribe to store using useSelector
6. onClick of addItem , removeItem , clearItem dispatch an action (with payload if required)