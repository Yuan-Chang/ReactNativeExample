import React, {Component} from 'react';
import {View} from 'react-native'

export default class MyCircle extends Component {

    render() {

        let {color,radius} = this.props;

        return (
            <View style={{
                backgroundColor: color,
                width: radius,
                height: radius,
                borderRadius: radius/2}}>

            </View>
        );
    }
};

MyCircle.defaultProps = {
    color: 'red',
    radius: 30,
};

