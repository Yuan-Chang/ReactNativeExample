import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, ActivityIndicator, View} from "react-native";
import CenterTextButton from "./CenterTextButton";
import MyHorizontalListView from "./MyHorizontalListView";
import {getServerURL} from "../global/Global"

export default class DynamicHorizontalView extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    render() {

        if (this.props.visible != true) {
            return null;
        }
        else if (this.state.isLoading) {

            fetch(getServerURL()+"/getUsers").then((response) => response.json())
                .then((responseJson) => {

                    console.log(responseJson);

                    this.setState({
                        isLoading: false,
                        usersList: responseJson
                    }, () => {

                    });
                }).catch((error) => {

                console.error(error);

                this.setState({
                    isLoading: false,
                });
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
                <MyHorizontalListView data={this.state.usersList}/>
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