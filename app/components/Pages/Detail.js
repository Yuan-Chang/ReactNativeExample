import React,{Component} from 'react';
import {Modal, Text, View,Alert} from 'react-native';
import CenterTextButton from "../CenterTextButton";

export default class Detail extends Component {

    constructor() {
        super();
    }

    _handlePress()
    {
        this.props.navigation.dispatch({ type: 'Navigation/BACK' });
    }

    render() {

        user = this.props.navigation.state.params;

        return (
            <View style={{margin:10}}>
                <Text style={{fontSize:25,margin:10}}>
                    {user.userName}'s detail
                </Text>
                <CenterTextButton text="Back" onPress={()=>this._handlePress()}/>
            </View>
        );
    }
}