import React, {Component} from 'react';
import {View, Switch} from 'react-native';

export default class MySwitchButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            falseSwitchIsOn: false
        };
    }

    render() {
        return (
            <View>
                <Switch
                    style={{width:50}}
                    onValueChange={(value)=> this.setState({falseSwitchIsOn:value})}
                    value={this.state.falseSwitchIsOn}
                />
            </View>
        )
    }
}