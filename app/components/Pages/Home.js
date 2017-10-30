import React, {Component} from 'react';
import {Modal, Text, View, Alert, Image, ScrollView, StyleSheet} from 'react-native';
import CenterTextButton from "../CenterTextButton";
import Toast from '../Native/ToastExample';
import MyTextInput from "../MyTextInput";
import MySwitchButton from "../MySwitchButton";
import MyCircle from "../MyCircle";
import MyHorizontalListView from "../MyHorizontalListView";

export default class Home extends Component {

    constructor() {
        super();
    }

    _handlePress() {
        this.props.navigation.navigate('Next');

        //Toast is a native function call from Android
        Toast.show('This messag is from android toast', Toast.ToastShort);

    }

    render() {
        return (
            <ScrollView>
                <View style={style.Container}>
                    <Text style={style.Title}>
                        This is homePage
                    </Text>
                    <Image
                        style={{width: 60, height: 60, margin: 10}}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />

                    <View style={{marginTop: 10, marginLeft: 10}}>
                        <CenterTextButton text="Next" onPress={() => this._handlePress()}/>
                    </View>

                </View>

                <View style={style.Container}>
                    <Text style={style.Title}>Edit text example</Text>
                    <MyTextInput/>
                </View>

                <View style={style.Container}>
                    <Text style={style.Title}>Switch Button</Text>
                    <MySwitchButton/>
                </View>

                <View style={style.Container}>
                    <Text style={style.Title}>Circle</Text>

                    <View style={{flexDirection:'row'}}>
                        <MyCircle/>
                        <MyCircle color='green' radius={50} />
                        <MyCircle color='purple' radius={70} />
                    </View>

                </View>

                <View style={style.Container}>
                    <Text style={style.Title}>Horizotal Listview(FlatList)</Text>

                    <View style={{height:80}}>
                        <MyHorizontalListView/>
                    </View>
                </View>


            </ScrollView>
        );
    }
}

let style = StyleSheet.create({
    Container:{
        padding:5,
        paddingTop:10,
        paddingBottom:15,
        borderBottomColor:'black',
        borderBottomWidth:1
    },
    Title:{
        fontSize:18,
        color:'blue',
        fontWeight:'bold',
        marginBottom:10
    }
});