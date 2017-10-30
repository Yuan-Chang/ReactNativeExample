import React from 'react';
import {StackNavigator} from 'react-navigation';
import HomePage from "../containers/HomePage";
import NextPage from "../containers/NextPage";
import DetailPage from "../containers/DetailPage";

export const RootStack = StackNavigator({
    Home : {
        screen:HomePage,
        navigationOptions:{
            title:"Home Page"
        }
    },

    Next : {
        screen:NextPage,
        navigationOptions:{
            title:"Users",
            headerLeft:null,
        }
    },
    Detail : {
        screen:DetailPage,
        navigationOptions:{
            title:"User detail",
            headerLeft:null
        }
    }
});

