import React, {Component} from 'react';
import {Text, TouchableOpacity,StyleSheet} from "react-native";

export default class CenterTextButton extends Component{

    constructor()
    {
        super();
    }

    render() {

        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.ButtonContainer}
            >
                <Text style={styles.ButtonText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    ButtonContainer:{
        height:40,
        width:80,
        justifyContent:'center'
    },
    ButtonText:{
        color:"white",
        padding:5,
        fontWeight:'bold',
        backgroundColor:"green",
        fontSize:18,
        borderRadius:5,
        textAlign:'center'
    }
});




