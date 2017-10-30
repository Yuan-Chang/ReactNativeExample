import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {users} from "../../config/data";

export default class Next extends Component {

    constructor() {
        super();
    }

    _handlePress(user) {
        this.props.navigation.navigate('Detail',{...user});
    }

    render() {
        return (
            <ScrollView>
                <List>
                    {
                        users.map((user) => (
                            <ListItem
                                key={user.userID}
                                title={user.userName}
                                roundAvatar
                                onPress={()=>this._handlePress(user)}
                            />
                        ))
                    }
                </List>
            </ScrollView>
        );
    }
}