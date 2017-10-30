import React, {Component} from 'react';
import Next from "../components/Pages/Next";

export default class NextPage extends Component
{
    constructor() {
        super();
    }

    render() {
        return (
            <Next navigation={this.props.navigation}/>
        );
    }
}