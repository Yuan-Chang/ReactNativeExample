import React, {Component} from 'react';
import Detail from "../components/Pages/Detail";

export default class DetailPage extends Component{

    constructor() {
        super();
    }

    render() {
        return (
            <Detail navigation={this.props.navigation}/>
        );
    }
}