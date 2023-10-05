# Redux toolkit
* * documentation: https://redux-toolkit.js.org/introduction/getting-started * * 

1. install toolkit - npm install @reduxjs/toolkit
2. install react redux - npm install react-redux

* go to quick start in the document - https://redux-toolkit.js.org/tutorials/quick-start
1. Create a Redux Store in the redux folder in my APP 
  then paste: store.js_ 
  import { configureStore } from '@reduxjs/toolkit'
        export const store = configureStore({
        reducer: {}, // all reducer should be store here.
        })

2. create a new folder in the redux folder. name is feature. you can store here all reducer. * inside this feature, we can create more folder like, counter, cart, user. based on the reducers in this app. 
3. we have to createReducer. Toolkit called it as slice. because, it like a piece of pizza. In the apps there is lot of reducer. so a reducer is a part of application. that is the reason for calling it as slice. Here based on slice we will do the those kind of work in the file. 
4. Provide the Redux Store to React - we have to connect redux in our react app. so we can use App in the provider. 
   for example: 
           import { store } from './redux/store'
            import { Provider } from 'react-redux'

            ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
                <Provider store={store}>
                <RouterProvider router={routes} />
                </Provider>
            </React.StrictMode>,
            )
5. create slice : 
            import { createSlice } from "@reduxjs/toolkit";

            const initialState = {
                count: 0
            };

            export const counterSlice = createSlice({
                name: "counter",
                initialState,
                reducers: { // all the function should be create here. based on this reducer. format is name: (parameter, action) => {}
                    increment: (store) => {
                        store.count = store?.count + 1;
                    },
                    decrement: (store) => {
                        store.count = store?.count - 1;
                    },
                    incrementByAction: (state, action) => {
                        state.count = state?.count + action?.payload;
                    },
                    decrementByAction: (state, action) => {
                        state.count = state?.count - action?.payload;
                    }
                }
            })

            // Action creators are generated for each case reducer function
            export const {increment, decrement, incrementByAction, decrementByAction} = counterSlice.actions;
            export default counterSlice?.reducer; // reducer should be default export
  
6. Now I have to connect reducer in the store, then only we can use in out app. example:
            import { configureStore } from '@reduxjs/toolkit'
            import counterSlice from './feature/Counter/counterSlice'

            export const store = configureStore({
                reducer: {
                    counter: counterSlice,
                },
            })
7. dev tools - by default dev tools true thake. aita store e use korte hoy.
           * we can install from chorme extention
8. Middleware- now, this is mostly not uses. but for knowledge, we have to know this. 
      - if you want to create custom middleware then you have to use currying function in javascript. 
      - we can call it in the store
      - if I not call the next from the middle ware. then the functionlity should not work. 
      - 




# interview question:
1. what is redux
2. what is redux toolkit
3. what is react redux
4. redux toolkit vs react redux
5. what is store
6. what is reducer
7. what is useSelector
8. what is useDispatch
9. what is configureStore
10. what is slice
11. how redux work 
12. redux vs context API
13. what is middileware. 
14. how middile ware working?
15. what is devtools, how it work?
16. 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
