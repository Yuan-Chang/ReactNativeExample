import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, ActivityIndicator, View} from "react-native";
import CenterTextButton from "./CenterTextButton";
import MyHorizontalListView from "./MyHorizontalListView";
import {getServerURL} from "../global/Global"
import {connect} from "react-redux"

export default class DynamicHorizontalView extends Component {



    constructor() {
        super();

    }

    render() {

        let loadingState = this.props.loadingState;

        if (loadingState == 0) {
            return null;
        }
        else if (loadingState == 1) {

            fetch(getServerURL()+"/getUsers").then((response) => response.json())
                .then((responseJson) => {

                    console.log(responseJson);

                    this.props.setLoadingState(2);
                    this.props.setUsers(responseJson);


                }).catch((error) => {

                console.error(error);

                this.props.setLoadingState(2);
            })

            return (
                <ActivityIndicator
                    animating={true}
                    color="red"
                    style={{opacity: 1}}
                    size="large"/>

            );
        }
        else {
            return (
                <MyHorizontalListView data={this.props.users}/>
            );
        }

    }
}

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
});
