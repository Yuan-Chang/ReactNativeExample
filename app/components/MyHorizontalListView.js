import React,{Component} from 'react'
import {FlatList,Text,View, Toast,TouchableOpacity,Alert} from 'react-native'
import {users} from "../config/data";



export default class MyHorizontalListView extends Component
{
    render(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    horizontal
                    data={this.props.data}
                    renderItem={({item}) => <ItemView item={item}/>}
                />
            </View>
        );
    }
};

MyHorizontalListView.defaultProps = {
  data : users
};

class ItemView extends Component
{
    _handlePress(){
        Alert.alert("abc");
    }

    render(){
        return (
            <TouchableOpacity style={{flex:1}} onPress={()=>this._handlePress()}>
                <View style={{borderColor:'blue',borderWidth:1, marginRight:2, padding:5, flex:1}} >
                    <Text>{this.props.item.userName}</Text>
                </View>
            </TouchableOpacity>

        );
    }
}