import React, {Component} from 'react';
import {Modal, Text, View, Alert, Image, ScrollView, StyleSheet} from 'react-native';
import CenterTextButton from "../CenterTextButton";
import Toast from '../Native/ToastExample';
import MyTextInput from "../MyTextInput";
import MySwitchButton from "../MySwitchButton";
import MyCircle from "../MyCircle";
import MyHorizontalListView from "../MyHorizontalListView";
import DynamicHorizontalView from "../DynamicHorizontalView";

export default class Home extends Component {

    constructor() {
        super();

        this.state = {
            isDynamicHorizontalViewLoading:false,
            isDynamicHorizontalViewLoadKey:0
        }
    }

    _handlePress(param) {

        if(param === 'Next')
        {
            this.props.navigation.navigate('Next');

            //Toast is a native function call from Android
            Toast.show('This messag is from android toast', Toast.ToastShort);
        }
        else if(param === 'Load')
        {
            this.setState({
                isDynamicHorizontalViewLoading:true,
                isDynamicHorizontalViewLoadKey:Math.random()
            });
        }



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
                        source={{uri: 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg'}}
                    />

                    <View style={{marginTop: 10, marginLeft: 10}}>
                        <CenterTextButton text="Next" onPress={() => this._handlePress('Next')}/>
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

                <View style={style.Container}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={style.Title}>Server Call</Text>
                        <View style={{marginLeft:15}}>
                            <CenterTextButton text="Load data" onPress={()=>this._handlePress('Load')}/>
                        </View>
                    </View>

                    <View style={{marginTop: 20, marginLeft: 5}}>
                        <DynamicHorizontalView visible={this.state.isDynamicHorizontalViewLoading} key={this.state.isDynamicHorizontalViewLoadKey}/>
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