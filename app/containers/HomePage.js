import React, {Component} from 'react';
import Home from "../components/Pages/Home";

export default class HomePage extends Component{

    constructor() {
        super();
    }

    render() {
        return (
            <Home navigation={this.props.navigation}/>
        );
    }
}