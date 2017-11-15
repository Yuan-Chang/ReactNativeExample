import React,{Component} from 'react'
import {RootStack} from "./config/router"

// import { createStore } from "redux"
// import appReducer from "./reducer/index"
// import {loadList} from "./actions/index"
// import {users} from "./config/data"

export default class App extends Component
{

    render()
    {
        // let store = createStore(appReducer);
        //
        // store.dispatch(loadList,users);
        //
        // console.log('initial state:', store.getState());

        return (
            <RootStack/>
        );
    }
}