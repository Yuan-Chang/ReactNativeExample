import React,{Component} from 'react';
import {TextInput} from 'react-native';

export default class MyTextInput extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {text:'Placeholder'};
    }

    render()
    {
        return (
            <TextInput style={{width:100,height:40,borderColor:'gray',borderWidth:0}}
                onChangeText={(text)=>this.setState({text})}
                       value={this.state.text}
            />
        );
    }
}