import React, {Component} from 'react';
import {
    StyleSheet,
    Button
} from 'react-native';
import PropsTest from "./PropsTest";

export default class PropsScreen extends Component{

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
    });

    render(){

        return(
            <PropsTest name="小明" sex="女" age={21}/>
        );

    }
}